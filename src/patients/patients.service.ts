import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { CreatePatientDto } from './dto/create-patient.dto';
import { UpdatePatientDto } from './dto/update-patient.dto';
import { Patient } from './entities/patient.entity';
import { BadRequestErrorEnum } from 'src/enums/error.enum';

@Injectable()
export class PatientsService {
  constructor(
    @InjectModel(Patient.name)
    private readonly patientModel: Model<Patient>,
  ) {}

  async create(createPatientDto: CreatePatientDto) {
    try {
      const intPt = new CreatePatientDto();
      intPt.name = createPatientDto.name;
      intPt.age = createPatientDto.age;
      intPt.symptoms = createPatientDto.symptoms;

      const crtPatient = this.patientModel.create(intPt);

      return crtPatient;
    } catch (err) {
      throw err;
    }
  }

  async findAll(page: number, limit: number) {
    try {
      const skip = (page - 1) * limit;
      const resPgPatient = this.patientModel
        .find()
        .skip(skip)
        .limit(limit)
        .sort({ createdAt: -1 })
        .exec();
      return resPgPatient;
    } catch (err) {
      throw err;
    }
  }

  async findOne(id: string) {
    try {
      if (!Types.ObjectId.isValid(id)) {
        throw new BadRequestException(BadRequestErrorEnum.INVALID_ID);
      }

      const objectId = new Types.ObjectId(id);

      const foundPatient = this.patientModel.findById(objectId);

      return foundPatient;
    } catch (err) {
      throw err;
    }
  }

  async update(id: string, updatePatientDto: UpdatePatientDto) {
    try {
      if (!Types.ObjectId.isValid(id)) {
        throw new BadRequestException(BadRequestErrorEnum.INVALID_ID);
      }

      const objectId = new Types.ObjectId(id);

      const intPtUpdate = new UpdatePatientDto();
      intPtUpdate.name = updatePatientDto.name;
      intPtUpdate.age = updatePatientDto.age;
      intPtUpdate.symptoms = updatePatientDto.symptoms;

      const updatedPatient = await this.patientModel.findByIdAndUpdate(
        objectId,
        {
          ...intPtUpdate,
        },
        { new: true },
      );

      if (!updatedPatient) {
        throw new Error('Paciente no encontrado');
      }

      return updatedPatient;
    } catch (err) {
      throw err;
    }
  }

  async remove(id: string) {
    try {
      if (!Types.ObjectId.isValid(id)) {
        throw new BadRequestException(BadRequestErrorEnum.INVALID_ID);
      }
      const objectId = new Types.ObjectId(id);

      const deletedPatient = await this.patientModel.findByIdAndUpdate(
        objectId,
        {
          isDeleted: true,
        },
      );

      if (deletedPatient?.isDeleted) {
        return { message: 'El paciente ha sido eliminado.' };
      }
    } catch (err) {
      throw err;
    }
  }
}

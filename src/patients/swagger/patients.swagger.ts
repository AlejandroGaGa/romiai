import { applyDecorators } from '@nestjs/common';
import {
  ApiOperation,
  ApiResponse,
  ApiParam,
  ApiQuery,
  ApiBody,
} from '@nestjs/swagger';
import { Patient } from '../entities/patient.entity';
import { CreatePatientDto } from '../dto/create-patient.dto';
import { UpdatePatientDto } from '../dto/update-patient.dto';

export class PatientsSwagger {
  static create() {
    return applyDecorators(
      ApiOperation({ summary: 'Crear un nuevo paciente' }),
      ApiBody({
        type: CreatePatientDto,
        description: 'Datos del paciente a crear',
        examples: {
          example: {
            summary: 'Paciente ejemplo',
            value: {
              name: 'Juan Pérez',
              age: 35,
              symptoms: ['fiebre', 'tos', 'dolor de cabeza'],
            },
          },
        },
      }),
      ApiResponse({
        status: 201,
        description: 'Paciente creado',
        content: {
          'application/json': {
            examples: {
              pacienteCreado: {
                summary: 'Paciente creado con éxito',
                value: {
                  _id: '64ddf6a2b3e5c123456789ab',
                  name: 'Juan Pérez',
                  age: 35,
                  symptoms: ['fiebre', 'tos', 'dolor de cabeza'],
                  isDeleted: false,
                  createdAt: '2025-08-18T18:00:00.000Z',
                  updatedAt: '2025-08-18T18:00:00.000Z',
                },
              },
            },
          },
        },
      }),
    );
  }

  static findAll() {
    return applyDecorators(
      ApiOperation({ summary: 'Obtener todos los pacientes paginados' }),
      ApiQuery({ name: 'page', required: false, type: Number }),
      ApiQuery({ name: 'limit', required: false, type: Number }),
      ApiResponse({
        status: 200,
        description: 'Lista de pacientes',
        content: {
          'application/json': {
            examples: {
              listaPacientes: {
                summary: 'Ejemplo de lista paginada',
                value: [
                  {
                    _id: '64ddf6a2b3e5c123456789ab',
                    name: 'Juan Pérez',
                    age: 35,
                    symptoms: ['fiebre', 'tos'],
                    isDeleted: false,
                    createdAt: '2025-08-18T18:00:00.000Z',
                    updatedAt: '2025-08-18T18:00:00.000Z',
                  },
                  {
                    _id: '64ddf6b7b3e5c123456789ac',
                    name: 'Ana Gómez',
                    age: 28,
                    symptoms: ['cansancio'],
                    isDeleted: false,
                    createdAt: '2025-08-18T18:05:00.000Z',
                    updatedAt: '2025-08-18T18:05:00.000Z',
                  },
                ],
              },
            },
          },
        },
      }),
    );
  }

  static findOne() {
    return applyDecorators(
      ApiOperation({ summary: 'Obtener un paciente por ID' }),
      ApiParam({ name: 'id', description: 'ID del paciente' }),
      ApiResponse({
        status: 200,
        description: 'Paciente encontrado',
        content: {
          'application/json': {
            examples: {
              paciente: {
                summary: 'Paciente ejemplo',
                value: {
                  _id: '64ddf6a2b3e5c123456789ab',
                  name: 'Juan Pérez',
                  age: 35,
                  symptoms: ['fiebre', 'tos'],
                  isDeleted: false,
                  createdAt: '2025-08-18T18:00:00.000Z',
                  updatedAt: '2025-08-18T18:00:00.000Z',
                },
              },
            },
          },
        },
      }),
    );
  }

  static update() {
    return applyDecorators(
      ApiOperation({ summary: 'Actualizar un paciente por ID' }),
      ApiParam({ name: 'id', description: 'ID del paciente' }),
      ApiBody({
        type: UpdatePatientDto,
        description: 'Datos del paciente a actualizar',
        examples: {
          example: {
            summary: 'Actualización ejemplo',
            value: {
              name: 'Juan Pérez',
              age: 36,
              symptoms: ['tos', 'fatiga'],
            },
          },
        },
      }),
      ApiResponse({
        status: 200,
        description: 'Paciente actualizado',
        content: {
          'application/json': {
            examples: {
              pacienteActualizado: {
                summary: 'Paciente actualizado con éxito',
                value: {
                  _id: '64ddf6a2b3e5c123456789ab',
                  name: 'Juan Pérez',
                  age: 36,
                  symptoms: ['tos', 'fatiga'],
                  isDeleted: false,
                  createdAt: '2025-08-18T18:00:00.000Z',
                  updatedAt: '2025-08-18T18:30:00.000Z',
                },
              },
            },
          },
        },
      }),
    );
  }

  static remove() {
    return applyDecorators(
      ApiOperation({ summary: 'Eliminar un paciente por ID' }),
      ApiParam({ name: 'id', description: 'ID del paciente' }),
      ApiResponse({
        status: 200,
        description: 'Paciente eliminado',
        content: {
          'application/json': {
            examples: {
              eliminado: {
                summary: 'Paciente eliminado',
                value: { message: 'El paciente ha sido eliminado.' },
              },
            },
          },
        },
      }),
    );
  }
}

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({ timestamps: true })
export class Patient {
  @Prop({ required: true }) name: string;
  @Prop({ required: true }) age: number;
  @Prop({ type: [String], required: true }) symptoms: string[];
  @Prop({ type: Boolean}) isDeleted: false;
  @Prop() createdAt?: Date;
  @Prop() updatedAt?: Date;
}

export const PatientSchema = SchemaFactory.createForClass(Patient);
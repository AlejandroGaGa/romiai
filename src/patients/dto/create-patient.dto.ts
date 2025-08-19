import { ArrayNotEmpty, IsArray, IsInt, IsString, Min } from 'class-validator';

export class CreatePatientDto {
  @IsString()
  name: string;

  @IsInt()
  @Min(0)
  age: number;

  @IsArray()
  @ArrayNotEmpty()
  @IsString({ each: true })
  symptoms: string[];
}

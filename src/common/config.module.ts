import { Module } from '@nestjs/common';
import { ConfigModule as NestConfigModule } from '@nestjs/config';
export const environment_variable: string = '.env.dev';
@Module({
  imports: [
    NestConfigModule.forRoot({
      envFilePath: [environment_variable],
      isGlobal: true,
    }),
  ],
})
export class ConfigModule {}
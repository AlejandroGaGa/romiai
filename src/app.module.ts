import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CommonModule } from './common/common.module';
import { PatientsModule } from './patients/patients.module';

@Module({
  imports: [CommonModule, PatientsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

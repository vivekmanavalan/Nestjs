import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { databaseConfig } from './config/databaseconfig';
import { EmployeeModule } from './Employee/employee.module';

@Module({
  //If the newly added modules are not imported in the app.modules the nestjs would not know if these modules exists
  //To know what controllers where recognised see the server startup
  imports: [EmployeeModule, TypeOrmModule.forRoot(databaseConfig)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

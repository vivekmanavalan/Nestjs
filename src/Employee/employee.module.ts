import { Module } from '@nestjs/common';
import { EmployeeController } from './employee.controller';
import { EmployeeService } from './employee.service';
import {TypeOrmModule} from '@nestjs/typeorm';
import { EmployeeRepository } from './employee.repository';

@Module({
    imports: [TypeOrmModule.forFeature([
        EmployeeRepository
    ])],
    controllers: [EmployeeController],
    providers: [EmployeeService],
})
export class EmployeeModule {}

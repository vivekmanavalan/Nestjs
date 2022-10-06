import {Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import { EmployeeRepository } from './employee.repository';
import { EmployeeDto } from './employee.dto';

@Injectable()
export class EmployeeService {
    constructor(@InjectRepository(EmployeeRepository) private employeeRepo: EmployeeRepository ){}

    async createEmployee(data: EmployeeDto){
        console.log('employee service');
        return await this.employeeRepo.save(data);
    }

    async getAllEmployees() {
        return await this.employeeRepo.getAllEmployees();
    }

    async getById(id: number) {
        return await this.employeeRepo.findOne(id);
    }
}
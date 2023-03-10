import {Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import { EmployeeRepository } from './employee.repository';
import { EmployeeDto } from './employee.dto';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { OnEvent } from '@nestjs/event-emitter/dist/decorators';

@Injectable()
export class EmployeeService {
    constructor(
        @InjectRepository(EmployeeRepository) private employeeRepo: EmployeeRepository,
        private eventEmitter: EventEmitter2 ){}

    async createEmployee(data: EmployeeDto){
        console.log('employee service');
        const res = await this.employeeRepo.save(data);
        //Emitting event when we create new user
        this.eventEmitter.emit('created.employee', {
            id: res.id,
            name: res.name,
            description: res.description, 
        })
        return res;
    }

    async getAllEmployees() {
        this.eventEmitter.emit('employees.requested',{
            message: 'Employees data is being received'
        })
        return await this.employeeRepo.getAllEmployees();
    }

    async getById(id: number) {
        return await this.employeeRepo.findOne(id);
    }
    async deleteById(id: number) {
        return await this.employeeRepo.delete(id);
    }

    @OnEvent('created.employee')
    handleCreateEvent(payload){
        console.log('From emitted event', payload);
    }

    @OnEvent('employees.requested')
    handleGetAllRequest(payload){
        console.log(payload);
    }
}
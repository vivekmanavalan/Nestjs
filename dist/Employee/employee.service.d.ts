import { EmployeeRepository } from './employee.repository';
import { EmployeeDto } from './employee.dto';
import { EventEmitter2 } from '@nestjs/event-emitter';
export declare class EmployeeService {
    private employeeRepo;
    private eventEmitter;
    constructor(employeeRepo: EmployeeRepository, eventEmitter: EventEmitter2);
    createEmployee(data: EmployeeDto): Promise<EmployeeDto & import("./employee.entity").EmployeeEntity>;
    getAllEmployees(): Promise<import("./employee.entity").EmployeeEntity[]>;
    getById(id: number): Promise<import("./employee.entity").EmployeeEntity>;
    deleteById(id: number): Promise<import("typeorm").DeleteResult>;
    handleCreateEvent(payload: any): void;
    handleGetAllRequest(payload: any): void;
}

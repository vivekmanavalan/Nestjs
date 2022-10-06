import { EmployeeEntity } from './employee.entity';
import { EmployeeService } from './employee.service';
import { EmployeeDto } from './employee.dto';
export declare class EmployeeController {
    private employeeService;
    constructor(employeeService: EmployeeService);
    helloEmployee(): string;
    getAllEmployees(): Promise<EmployeeEntity[]>;
    getById(id: number): Promise<EmployeeEntity>;
    addEmployee(data: EmployeeDto): Promise<EmployeeDto & EmployeeEntity>;
}

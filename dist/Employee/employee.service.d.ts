import { EmployeeRepository } from './employee.repository';
import { EmployeeDto } from './employee.dto';
export declare class EmployeeService {
    private employeeRepo;
    constructor(employeeRepo: EmployeeRepository);
    createEmployee(data: EmployeeDto): Promise<EmployeeDto & import("./employee.entity").EmployeeEntity>;
    getAllEmployees(): Promise<import("./employee.entity").EmployeeEntity[]>;
    getById(id: number): Promise<import("./employee.entity").EmployeeEntity>;
}

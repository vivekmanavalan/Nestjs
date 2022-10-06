import { Repository } from "typeorm";
import { EmployeeEntity } from "./employee.entity";
export declare class EmployeeRepository extends Repository<EmployeeEntity> {
    getAllEmployees(): Promise<EmployeeEntity[]>;
}

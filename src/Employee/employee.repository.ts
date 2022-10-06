import { EntityRepository, Repository } from "typeorm";
import { EmployeeEntity } from "./employee.entity";

@EntityRepository(EmployeeEntity)
export class EmployeeRepository extends Repository<EmployeeEntity> {
    async getAllEmployees () {
        return this.createQueryBuilder('employee').getMany();
    }
}
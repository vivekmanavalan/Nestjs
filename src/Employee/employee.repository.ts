import { EntityRepository, Repository } from "typeorm";
import { EmployeeEntity } from "./employee.entity";

@EntityRepository(EmployeeEntity)
export class EmployeeRepository extends Repository<EmployeeEntity> {
    async getAllEmployees () {
        return this.createQueryBuilder('employee').skip(0).take(15).getMany();
    }
}


//For pagination in nestjs
//Take data limit in page and then the page number.
//Skip the limit * page and take the limit
// limit = 15 page = 3 skip(45) take(15)
import { BaseEntity } from "typeorm";
export declare class EmployeeEntity extends BaseEntity {
    id: number;
    name: string;
    description?: string;
}

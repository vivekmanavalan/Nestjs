import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('employee')
export class EmployeeEntity extends BaseEntity {

    @PrimaryGeneratedColumn({
        comment: 'Primary key'
    })
    id: number;

    @Column({type: 'varchar'})
    name: string;
    
    @Column({type: 'varchar'})
    description?: string;
}
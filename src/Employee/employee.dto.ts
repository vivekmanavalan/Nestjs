import { IsNotEmpty, Length, IsOptional } from "class-validator";

export class EmployeeDto {

    @IsNotEmpty({message: 'Name cannot be empty'})
    @Length(3,10)
    name: string;

    @IsOptional()
    @Length(3,255)
    description?: string;
}
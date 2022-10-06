import {Body, Controller, Get, Param, ParseIntPipe, Post, Put, UsePipes, ValidationPipe} from '@nestjs/common';
import { EmployeeEntity } from './employee.entity';
import { EmployeeService } from './employee.service';
import { EmployeeDto } from './employee.dto';

@Controller('employee')
export class EmployeeController {
    constructor(private employeeService: EmployeeService){}

    @Get()
    helloEmployee(){
        return 'Hola Amigo';
    }
    @Get('getAll')
    getAllEmployees(){
        return this.employeeService.getAllEmployees();
    }
    @Get('/:id')
    getById(@Param('id', ParseIntPipe) id:number){
        return this.employeeService.getById(id);
    }
    @Post()
    @UsePipes(ValidationPipe)
    //pipes are used to validate and transform the input data.
    //If the validationPipe is not added then all the validations in the ORM will not reflect
    addEmployee(@Body() data: EmployeeDto){
        return this.employeeService.createEmployee(data);
    }
}
import {Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, UsePipes, ValidationPipe, UseGuards} from '@nestjs/common';
import { EmployeeEntity } from './employee.entity';
import { EmployeeService } from './employee.service';
import { EmployeeDto } from './employee.dto';
import { EmployeeGuard } from './employeeGuard';

@Controller('employee')
export class EmployeeController {
    constructor(private employeeService: EmployeeService){}

    @Get()
    helloEmployee(){
        return 'Hola Amigo';
    }
    @Get('/getAll')
    @UseGuards(EmployeeGuard)
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

    @Delete('/:id')
    async deleteById(@Param('id') id: number){
        console.log('id', typeof id);
        return this.employeeService.deleteById(id);
    }
}
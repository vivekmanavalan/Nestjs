import { Controller, Get, Injectable, Param, UseGuards } from '@nestjs/common';
import { response } from 'express';
import { AppService } from './app.service';
import { CustomGuard } from './customGuard';

@Controller('hello')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/:name')
  @UseGuards(CustomGuard)
  getHello(@Param('name') name:string) {
    return this.appService.getHello(name);
  }
}

//Guards:
//  *UseGuards are the annotation used for guards and we have created a guard for our API named CustomGuard
//  * These guards are used to validate a request before it is served with a response.
//  * Used to check if the user has logged in and if the user has access to the information provided the API.

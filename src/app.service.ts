import { Injectable } from '@nestjs/common';
import { Cron } from '@nestjs/schedule/dist/decorators';

@Injectable()
export class AppService {
  getHello(name:string): string {
    return `Hello ${name}!`;
  }
}

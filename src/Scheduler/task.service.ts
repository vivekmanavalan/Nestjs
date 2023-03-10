import { Injectable } from "@nestjs/common";
import { Cron } from "@nestjs/schedule";

@Injectable()
export class TaskService {
    @Cron('10 * * * * * ')
    executeCron() {
        console.log('Message from the developer using cron every 10 second');
    }
}
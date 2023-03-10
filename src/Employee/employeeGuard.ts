import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
@Injectable()
export class EmployeeGuard implements CanActivate {
    async canActivate(context: ExecutionContext): Promise<boolean> {
        const request = context.switchToHttp().getRequest();
        if(request.originalUrl.includes('employee')) return true;
        return false;
    }
}
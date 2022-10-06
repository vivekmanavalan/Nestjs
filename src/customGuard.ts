import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";

@Injectable()
export class CustomGuard implements CanActivate {
   async canActivate(context: ExecutionContext): Promise<boolean> {
        const request = context.switchToHttp().getRequest();
        if(request.params.name === 'vivek') return true; 
        return false;
    }
    
} 

//This is a customised guard created for our use.
//Since the guards will be injected in the APIs we should let that be injectable so the annotation @Injectable helps us
//canActivate is an interface which should be implemented because it contains the executioncontext
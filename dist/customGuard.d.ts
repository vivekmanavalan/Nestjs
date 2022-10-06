import { CanActivate, ExecutionContext } from "@nestjs/common";
export declare class CustomGuard implements CanActivate {
    canActivate(context: ExecutionContext): Promise<boolean>;
}

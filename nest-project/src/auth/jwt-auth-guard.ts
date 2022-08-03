import {CanActivate, ExecutionContext, Injectable, UnauthorizedException} from "@nestjs/common";
import {Observable} from "rxjs";
import {JwtService} from "@nestjs/jwt";

@Injectable()
export class JwtAuthGuard implements CanActivate {

    constructor(private jwtService: JwtService) {
    }

    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
        const request = context.switchToHttp().getRequest();
        try {

        const authHeaders = request.headers.authorization;
        const bearer = authHeaders.split(' ')[0];
        const token = authHeaders.split(' ')[1];

        if (bearer !== 'Bearer' || !token) {
            throw  new UnauthorizedException({message: 'user is not auth'})
        }

        request.user = this.jwtService.verify(token,{publicKey:'secret'});

        return true;
        }catch (e) {
            throw  new UnauthorizedException({message: 'user is not auth'});
        }
    }

}
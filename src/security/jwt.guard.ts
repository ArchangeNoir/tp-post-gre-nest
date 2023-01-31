import { Injectable, UnauthorizedException } from "@nestjs/common";
import { AuthGuard,PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";
import { ConfigService } from '@nestjs/config';
import { User } from "src/database/entities/user.entity";

@Injectable()
export class JwtAuthentificationGuard extends AuthGuard('jwt') {}

@Injectable()
export class JwtAuthenticationStrategy extends PassportStrategy(Strategy) {
    constructor(
        private configService: ConfigService
    ) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: configService.get('JWT_SECRET')
        })
    }

    async validate(payload: { userId: string }) {
        const user = await User.findOneBy({ id: payload.userId})

        if(user == null) {
            new UnauthorizedException("Vous devez être authentifier")
        }

        return user;
    }

}

export interface RequestWithUser extends Request {
    user: User
}
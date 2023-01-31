import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { request } from 'http';
import { UserService } from './user.service';
import { JwtAuthentificationGuard, RequestWithUser } from 'src/security/jwt.guard'
import { UserRegisterDto, UserLoginDto } from './user.dto';



@Controller('user')
export class UserController {
    constructor(private userService: UserService) {}

    @Post('register')
    register(@Body() UserRegisterDto: UserRegisterDto) {
        return this.userService.registerUser(UserRegisterDto)
    }

    @Post('login')
    login(@Body() UserLoginDto: UserLoginDto){
        return this.userService.loginUser(UserLoginDto)
    }

    @UseGuards(JwtAuthentificationGuard)
    @Get('me')
    me(@Req() request: RequestWithUser) {
        return request.user
    }
}

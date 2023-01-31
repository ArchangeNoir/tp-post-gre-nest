import { BadRequestException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { compare, hash } from 'bcrypt';
import { User } from 'src/database/entities/user.entity';
import { UserRegisterDto, UserLoginDto } from './user.dto';

@Injectable()
export class UserService {
    constructor(private jwtService: JwtService) {

    }

    async registerUser(UserRegisterDto: UserRegisterDto) {
        const user = new User()

        user.email = UserRegisterDto.email
        user.firstname = UserRegisterDto.firstname
        user.lastname = UserRegisterDto.lastname
        
        user.password = await hash(UserRegisterDto.password, 10)

        await user.save()
    }

    async loginUser(UserLoginDto: UserLoginDto) {
        const user = User.findOne({where: {email: UserLoginDto.email}})

        if (user == null) {
            new BadRequestException("Email fournit incorrect")
        }

        const isPasswordMatching = await compare(UserLoginDto.password, (await user).password)

        if (isPasswordMatching == false) {
            new BadRequestException("Email ou mot de passe incorrect")
        }

        const token = this.jwtService.sign({
            userId: (await user).id
        })

        return { token: token }
    }
}

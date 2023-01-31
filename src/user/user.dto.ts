import { IsNotEmpty, IsString, MinLength } from "class-validator"


export class UserRegisterDto {
    @IsString()
    @IsNotEmpty()
    email: string

    @IsString()
    @IsNotEmpty()
    firstname: string

    @IsString()
    @IsNotEmpty()
    lastname: string

    @IsString()
    @IsNotEmpty()
    @MinLength(8)
    password: string
}

export class UserLoginDto {

        @IsString()
        @IsNotEmpty()
        @MinLength(8)
        password: string
    
        @IsString()
        @IsNotEmpty()
        email: string
    
}
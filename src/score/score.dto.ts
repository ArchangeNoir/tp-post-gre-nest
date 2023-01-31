import { IsNotEmpty, IsNumber, IsString } from "class-validator"


export class ScoreDto {
    @IsNumber()
    @IsNotEmpty()
    points: number;

    @IsString()
    @IsNotEmpty()
    jeu: string;
}
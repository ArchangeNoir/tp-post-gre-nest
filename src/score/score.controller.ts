import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { JwtAuthentificationGuard, RequestWithUser } from 'src/security/jwt.guard';
import { ScoreService } from './score.service';
import { Score } from '../database/entities/score.entity';
import { ScoreDto } from './score.dto';

@Controller('score')
export class ScoreController {
    constructor(private scoreService: ScoreService) {}

    @Get()
    getAllScores(): Promise<Score[]> {
        return this.scoreService.getAll();
    }

    @UseGuards(JwtAuthentificationGuard)
    @Post('addscore')
    addScore(@Req() request: RequestWithUser, @Body() scoreData: ScoreDto): Promise<Score> {
        return this.scoreService.addScore(request.user, scoreData);
    }
}

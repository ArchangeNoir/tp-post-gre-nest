import { Injectable } from '@nestjs/common';
import { Score } from '../database/entities/score.entity';
import { User } from '../database/entities/user.entity';
import { ScoreDto } from './score.dto';
import { JeuService } from 'src/jeu/jeu.service';
import { Jeu } from 'src/database/entities/jeu.entity';

@Injectable()
export class ScoreService {
    constructor(private jeuService: JeuService) {}

    getAll(): Promise<Score[]> {
        return Score.find();
    }

    async addScore(user: User, scoreData: ScoreDto): Promise<Score> {
        const jeu: Jeu = await this.jeuService.getOne(scoreData.jeu);

        const score: Score = new Score()

        score.points = scoreData.points;
        score.jeu = jeu;
        score.user = user

        return Score.save(score);
    }
}

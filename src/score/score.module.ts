import { Module } from '@nestjs/common';
import { Jeu } from 'src/database/entities/jeu.entity';
import { JeuModule } from 'src/jeu/jeu.module';
import { ScoreController } from './score.controller';
import { ScoreService } from './score.service';

@Module({
  imports: [
    JeuModule
  ],
  controllers: [ScoreController],
  providers: [ScoreService]
})
export class ScoreModule {}

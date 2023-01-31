import { Module } from '@nestjs/common';
import { JeuController } from './jeu.controller';
import { JeuService } from './jeu.service';

@Module({
  controllers: [JeuController],
  providers: [JeuService],
  exports: [JeuService]
})
export class JeuModule {}

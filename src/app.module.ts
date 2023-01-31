import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { ScoreModule } from './score/score.module';
import { DatabaseModule } from './database/database.module';
import { JeuModule } from './jeu/jeu.module';
import { JwtAuthenticationStrategy } from './security/jwt.guard';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot(), UserModule, ScoreModule, DatabaseModule, JeuModule],
  controllers: [AppController],
  providers: [AppService, JwtAuthenticationStrategy],
})
export class AppModule {}

import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Score } from './entities/score.entity';
import { User } from './entities/user.entity';
import { Jeu } from './entities/jeu.entity';

@Module({
    imports: [
        TypeOrmModule.forRootAsync({
            imports: [ConfigModule.forRoot()],
            inject: [ConfigService],
            useFactory: (configService: ConfigService) => ({
                type: 'postgres',
                host: configService.get('BDD_HOST'),
                port: configService.get('BDD_PORT'),
                username: configService.get('BDD_USER'),
                password: configService.get('BDD_PASSWORD'),
                database: configService.get('BDD_DB'),
                entities: [User, Jeu, Score],
                synchronize: true
            })
        })
    ]
})
export class DatabaseModule {}

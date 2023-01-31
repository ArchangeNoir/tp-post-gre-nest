import { BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from './user.entity';
import { Jeu } from './jeu.entity';

@Entity()
export class Score extends BaseEntity {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('int')
    points: number;

    @ManyToOne(() => User, (user) => user.scores, { eager: true })
    user: User

    @ManyToOne(() => Jeu, (jeu) => jeu.scores, { eager: true })
    jeu: Jeu
}
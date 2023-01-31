import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Score } from './score.entity';

@Entity()
export class Jeu extends BaseEntity {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('varchar')
    nom: string;

    @OneToMany(() => Score, (score) => score.jeu)
    scores: Score[]
}
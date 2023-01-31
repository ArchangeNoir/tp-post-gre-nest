import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Score } from './score.entity';

@Entity()
export class User extends BaseEntity {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('varchar')
    firstname: string;

    @Column('varchar')
    lastname: string;

    @Column('varchar', { unique: true })
    email: string;

    @Column('varchar')
    password: string;

    @OneToMany(() => Score, (score) => score.user)
    scores: Score[]
}
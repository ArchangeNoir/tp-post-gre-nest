import { Injectable, NotFoundException } from '@nestjs/common';
import { Jeu } from '../database/entities/jeu.entity';

@Injectable()
export class JeuService {

    getAll(): Promise<Jeu[]> {
        return Jeu.find();
    }

    async getOne(jeuId: string): Promise<Jeu> {
        const jeu: Jeu | null = await Jeu.findOneBy({ id: jeuId })
        
        if (jeu == null)
            throw new NotFoundException('Jeu not found');

        return jeu;
    }
}

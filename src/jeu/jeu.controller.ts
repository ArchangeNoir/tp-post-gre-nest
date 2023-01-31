import { Controller, Get, Param } from '@nestjs/common';
import { Jeu } from 'src/database/entities/jeu.entity';
import { JeuService } from './jeu.service';

@Controller('jeu')
export class JeuController {
    constructor(private readonly jeuService: JeuService) {}

    @Get()
    getJeux(): Promise<Jeu[]> {
        return this.jeuService.getAll();
    }

    @Get('/:jeuId')
    getOneJeu(@Param('jeuId') jeuId: string): Promise<Jeu> {
        return this.jeuService.getOne(jeuId);
    }
}

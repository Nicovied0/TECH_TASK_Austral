

import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class PokemonIDStringService {
    url: string = environment.backUrl

    getPokemonID(string: any) {
        const imageUrl = string;

        const parts = imageUrl.split('/');
        const lastPart = parts[parts.length - 1];
        const pokemonId = parseInt(lastPart.split('.')[0]);
        return pokemonId;
    }

}

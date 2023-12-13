// pokemon.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  constructor(private http: HttpClient) {}
   url : string = environment.backUrl

  getPokemonsList(): Observable<any> {
    console.log("se llamo al service")
    return this.http.get<any>( `https://tech-task-austral.vercel.app/pokemon`);
  }

  getPokemonDetails(url: string): Observable<any> {
    return this.http.get<any>(url);
  }

  
  async getPokemonsDetails(pokemons: any[]): Promise<any[]> {
    const pokemonData = await Promise.all(pokemons.map(async (pokemon) => {
      try {
        const subRequest = await this.getPokemonDetails(pokemon.url).toPromise();
        return {
          name: subRequest.name,
          id: Number(subRequest.id),
          hp: subRequest.stats[0].base_stat,
          attack: subRequest.stats[1].base_stat,
          defense: subRequest.stats[2].base_stat,
          speed: subRequest.stats[4].base_stat,
          height: subRequest.height,
          weight: subRequest.weight,
          image: subRequest.sprites.other['official-artwork'].front_default,
          types: subRequest.types.map((type: any) => {
            return { name: type.type.name };
          })
        };
      } catch (error) {
        console.error('Error fetching Pokemon details:', error);
        return null;
      }
    }));

    return pokemonData.filter((data) => data !== null);
  }
  
}

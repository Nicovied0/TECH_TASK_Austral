import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Subscription } from 'rxjs';

interface Pokemon {
  id: number;
  name: string;
  url: string;
  image:string
  types:Array<any>
}

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.page.html',
  styleUrls: ['./pokemons.page.scss'],
})
export class PokemonsPage implements OnInit, OnDestroy {
  private pokemonSubscription: Subscription | undefined;
  pokemons: Pokemon[] = [];
  alldate: any[] = [];

  constructor(private http: HttpClient) {}
  
  obtenerClaseTipoPokemon(types: any[]): string {
    const primerTipo = types[0]?.name.toLowerCase(); // Obtener el nombre del primer tipo
    return primerTipo ? primerTipo + '-type-color' : ''; // Retornar la clase correspondiente o vacío si no hay tipo
  }

  ngOnInit() {
    this.pokemonSubscription = this.http
      .get<any>("https://pokeapi.co/api/v2/pokemon/?&limit=20")
      .subscribe((res) => {
        this.pokemons = res.results;
        console.log( this.pokemons,"soy subreques")
        this.getPokemonsDetails(this.pokemons);
      });
  }

  async getPokemonsDetails(pokemons: Pokemon[]) {
    const pokemonData = await Promise.all(pokemons.map(async (pokemon) => {
      try {
        const subRequest = await this.http.get<any>(pokemon.url).toPromise();
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

    this.alldate = pokemonData.filter((data) => data !== null);
  }

  ngOnDestroy() {
    if (this.pokemonSubscription) {
      this.pokemonSubscription.unsubscribe();
    }
  }
}

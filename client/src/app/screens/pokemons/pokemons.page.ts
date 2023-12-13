// pokemons.page.ts
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { PokemonService } from '../../Services/Pokemon.service';


@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.page.html',
  styleUrls: ['./pokemons.page.scss'],
})
export class PokemonsPage implements OnInit, OnDestroy {
  private pokemonSubscription: Subscription | undefined;
  pokemons: Pokemon[] = [];

  constructor(private pokemonService: PokemonService) { }

  async ngOnInit() {
    this.getPokemons()
  }

  async getPokemons() {
    try {
      this.pokemonSubscription = this.pokemonService.getPokemonsList().subscribe(
        (data) => {
          console.log('Datos de Pokémon recibidos:', data);
          this.pokemons = data;
        }

      )
    } catch {

      console.error('Error al obtener la lista de Pokémon:');

    }


  }

  obtenerClaseTipoPokemon(types: any[]): string {
    const primerTipo = types[0]?.toLowerCase();
    return primerTipo ? primerTipo + '-type-color' : '';
  }

  ngOnDestroy() {
    if (this.pokemonSubscription) {
      this.pokemonSubscription.unsubscribe();
    }
  }
}

interface Pokemon {
  id: number;
  name: string;
  url: string;
  image: string;
  types: Array<any>;
}

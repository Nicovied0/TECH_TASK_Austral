// pokemons.page.ts
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { PokemonService } from '../../Services/Pokemon.service';
import { InfiniteScrollCustomEvent } from '@ionic/angular';


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
    this.generateItems();
  }

  async getPokemons() {
    try {
      this.pokemonSubscription = this.pokemonService.getPokemonsList().subscribe(
        (data) => {
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

  loadMorePokemons(event: any): void {
    const pokeTo = 20;
    const limitPoke = this.pokemons.length;
  
    this.pokemonService.getPokemons(pokeTo, limitPoke).subscribe(
      data => {
        this.pokemons = this.pokemons.concat(data);
          event.target.complete();
      },
      error => {
        console.error('Error fetching Pokemon list:', error);
          event.target.complete();
      }
    );
  }
  
 

  offset = 0
  items : any = [];

  private generateItems() {
    const count = this.items.length + 1;
    for (let i = 0; i < 50; i++) {
      this.items.push(`Item ${count + i}`);
    }
  }
  onIonInfinite(ev:any) {
    this.generateItems();
    setTimeout(() => {
      (ev as InfiniteScrollCustomEvent).target.complete();
    }, 500);
  }


}
interface Pokemon {
  id: number;
  name: string;
  url: string;
  image: string;
  types: Array<any>;
}

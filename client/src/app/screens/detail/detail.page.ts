import { Component, OnInit } from "@angular/core";
import { PokemonIDService } from '../..//Services/PokemonID.service';
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {

  id: string | null = "";
  pokemon: any = {};


  constructor(private router: Router, private pokemonService: PokemonIDService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.getPokemon();
    
  }

  getPokemon() {
    this.id = this.activatedRoute.snapshot.paramMap.get("id");

    this.pokemonService.getPokemonsID(this.id).subscribe((res) => {
      this.pokemon = {
        name: res[0].name,
        id: res[0].id,
        hp: res[0].life,
        attack: res[0].attack,
        defense: res[0].defense,
        speed: res[0].speed,
        height: res[0].height,
        weight: res[0].weight,
        image: res[0].image,
        types: Array.isArray(res[0].types) ? res[0].types : [],
        evolutionBack: res[0]?.evolutionBack?.[0]?.image || null,
        evolutionNext: res[0]?.evolutionNext?.[0]?.image || null
      };
    });
  }

  imageLoaded = false;

  onImageLoad() {
    this.imageLoaded = true;
  }

  goNewComment(id: any) {
    this.router.navigate([`comments/${id}`])

  }
}

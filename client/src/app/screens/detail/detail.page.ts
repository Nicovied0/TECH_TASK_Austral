import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {

  id: string | null = "";
  pokemon: Pokemon | null = null;

  constructor(
    private http: HttpClient,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get("id");
    console.log(this.id);

    this.http
      .get<any>("https://pokeapi.co/api/v2/pokemon/" + this.id)
      .subscribe((res) => {
        this.pokemon = {
          name: res.name,
          id: res.id,
          hp: res.stats[0].base_stat,
          attack: res.stats[1].base_stat,
          defense: res.stats[2].base_stat,
          speed: res.stats[4].base_stat,
          height: res.height,
          weight: res.weight,
          image: res.sprites.other['official-artwork'].front_default
          ,
          types: res.types.map((type: any) => {
            return { name: type.type.name };
          })};
        console.log(this.pokemon); // Imprime los detalles del Pokémon correctamente aquí
      });
  }
}

interface Pokemon {
  name: any,
  id: number,
  hp: number,
  attack: number,
  defense: number,
  speed: number,
  height: number,
  weight: number,
  image: string,
  types:any
}

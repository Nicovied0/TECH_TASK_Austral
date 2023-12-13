import { Component, OnInit } from '@angular/core';

import { PokemonsPage } from '../pokemons/pokemons.page';
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  component = PokemonsPage;

}

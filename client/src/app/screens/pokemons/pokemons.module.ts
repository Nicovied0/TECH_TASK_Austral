
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PokemonsPageRoutingModule } from './pokemons-routing.module';

import { PokemonsPage } from './pokemons.page';
import { CapitalizeFirstLetterPipe } from 'src/app/pipes/capitalize-first-letter.pipe';


@NgModule({
  
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PokemonsPageRoutingModule  ],
  declarations: [PokemonsPage,CapitalizeFirstLetterPipe]
})
export class PokemonsPageModule {}

import { PokemonIDStringService } from './../../Services/PokemonIdByString.service';
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss'],
})
export class AccordionComponent implements OnInit {
  @Input() data: any;

  constructor(private pokemonIDStringService: PokemonIDStringService,private router:Router) { }

  ngOnInit() { }

  showContent: boolean = false;
  showContentEvolution: boolean = false;

  toggleAccordion() {
    this.showContent = !this.showContent;
    this.showContentEvolution = false
  }

  toggleAccordion2() {
    this.showContentEvolution = !this.showContentEvolution;
    this.showContent = false
  }

  getEvolution(string:any){
    const route = this.pokemonIDStringService.getPokemonID(string)
    this.router.navigate([`/detail/${route}`])
    window.scroll(0,0)
  }

}

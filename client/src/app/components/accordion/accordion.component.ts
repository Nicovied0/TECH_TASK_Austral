import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss'],
})
export class AccordionComponent implements OnInit {
  @Input() data: any;

  constructor() { }

  ngOnInit() { }
  showContent: boolean = false;
  showContentEvolution: boolean = false;

  toggleAccordion() {
    this.showContent = !this.showContent;
    this.showContentEvolution = false
    console.log(this.data)
  }

  toggleAccordion2() {
    this.showContentEvolution = !this.showContentEvolution;
    this.showContent = false
    console.log(this.data)
  }

}

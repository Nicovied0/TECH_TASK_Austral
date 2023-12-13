import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss'],
})
export class AccordionComponent implements OnInit {
  @Input() data :any;

  constructor() { }

  ngOnInit() { }
  showContent: boolean = false;

  toggleAccordion() {
    this.showContent = !this.showContent;
    console.log(this.data)
  }

}

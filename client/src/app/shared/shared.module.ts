import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CapitalizeFirstLetterPipe } from '../pipes/capitalize-first-letter.pipe';

@NgModule({
  declarations: [
    CapitalizeFirstLetterPipe
  ],
  exports: [
    CapitalizeFirstLetterPipe
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }

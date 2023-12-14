import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { FormCommentsPageRoutingModule } from './form-comments-routing.module';
import { FormCommentsPage } from './form-comments.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormCommentsPageRoutingModule, 
    SharedModule
  ],
  declarations: [FormCommentsPage]
})
export class FormCommentsPageModule { }

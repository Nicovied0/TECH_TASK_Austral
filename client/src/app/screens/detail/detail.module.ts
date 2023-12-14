import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { DetailPageRoutingModule } from './detail-routing.module';
import { DetailPage } from './detail.page';
import { SharedModule } from 'src/app/shared/shared.module';
import { AccordionComponent } from 'src/app/components/accordion/accordion.component';
import { CommentsComponent } from 'src/app/components/comments/comments.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailPageRoutingModule,
    SharedModule,
  ],
  declarations: [DetailPage, AccordionComponent, CommentsComponent]
})
export class DetailPageModule { }

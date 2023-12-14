import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormCommentsPage } from './form-comments.page';

const routes: Routes = [
  {
    path: '',
    component: FormCommentsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormCommentsPageRoutingModule {}

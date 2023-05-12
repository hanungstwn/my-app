import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CallDetailsPage } from './call-details.page';

const routes: Routes = [
  {
    path: '',
    component: CallDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CallDetailsPageRoutingModule {}

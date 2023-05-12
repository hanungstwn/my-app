import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CallDetailsPageRoutingModule } from './call-details-routing.module';

import { CallDetailsPage } from './call-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CallDetailsPageRoutingModule
  ],
  declarations: [CallDetailsPage]
})
export class CallDetailsPageModule {}

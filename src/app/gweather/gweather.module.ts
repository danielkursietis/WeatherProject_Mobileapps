import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GweatherPageRoutingModule } from './gweather-routing.module';

import { GweatherPage } from './gweather.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GweatherPageRoutingModule
  ],
  declarations: [GweatherPage]
})
export class GweatherPageModule {}

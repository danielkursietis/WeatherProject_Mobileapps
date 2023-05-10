import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GweatherPage } from './gweather.page';

const routes: Routes = [
  {
    path: '',
    component: GweatherPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GweatherPageRoutingModule {}

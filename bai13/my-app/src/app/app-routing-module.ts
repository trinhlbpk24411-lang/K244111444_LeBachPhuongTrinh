import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServiceProductImageEvent } from './service-product-image-event/service-product-image-event';
import { ServiceProductImageEventDetail } from './service-product-image-event-detail/service-product-image-event-detail';

const routes: Routes = [
  {
    path: 'service-product-image-event',
    component: ServiceProductImageEvent
  },
  {
    path: 'service-product-image-event/:id',
    component: ServiceProductImageEventDetail
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

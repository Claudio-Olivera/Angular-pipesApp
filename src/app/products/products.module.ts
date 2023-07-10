import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrimeNgModule } from '../prime-ng/prime-ng.module';

import { BasicsPageComponent } from './pages/basics-page/basics-page.component';
import { CanFlyPipe } from './pipes/can-fly.pipe';
import { NumbersPageComponent } from './pages/numbers-page/numbers-page.component';
import { OrderComponent } from './pages/order/order.component';
import { ProductsRoutingModule } from './products-routing.module';
import { SortByPipe } from './pipes/sort-by.pipe';
import { ToggleCasePipe } from './pipes/toggle-case.pipe';
import { UncommonPageComponent } from './pages/uncommon-page/uncommon-page.component';



@NgModule({
  declarations: [
    BasicsPageComponent,
    NumbersPageComponent,
    UncommonPageComponent,
    OrderComponent,

    //Pipes
    CanFlyPipe,
    SortByPipe,
    ToggleCasePipe,
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    PrimeNgModule,

  ]
})
export class ProductsModule { }

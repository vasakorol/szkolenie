import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
// import {ProductsService} from './services/products.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [HomeComponent],
  providers: [
    // ProductsService
  ]
})
export class FrontendModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes} from '@angular/router';

import { ProductsListComponent } from './products-list/products-list.component';

import {ProductsService} from './services/products.service';
import { ProductPreviewComponent } from './product-preview/product-preview.component';
import { ProductFormComponent } from './product-preview/product-form.component';

const routingConfig:Routes = [
  { path:'admin', component: ProductsListComponent }
];
const routerModule = RouterModule.forRoot(routingConfig);

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    routerModule
  ],
  declarations: [
    ProductsListComponent,
    ProductPreviewComponent,
    ProductFormComponent
  ],
  providers: [
    ProductsService
  ],
  bootstrap: [ProductsListComponent]
})
export class BackendModule { }

import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import {ProductsService} from "../services/products.service";

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {

  public products = [];

  @Output('save')
  onSave = new EventEmitter();

  public mode = '';

  public editProduct;

  public selectedProduct;

  public newProduct;

  public productsService;

  constructor(productsService: ProductsService) {
    this.productsService = productsService;
   }

  ngOnInit() {
    this.productsService.getList((list) => {
      this.products = list;
    });
  }

  public callback(list) {
    this.products = list;
  }

  previewProduct(product) {
    this.mode = 'preview';
    this.newProduct = null;
    if(!this.editProduct) {
      if( this.selectedProduct && this.selectedProduct.id == product.id) {
        this.selectedProduct = null;
      } else {
        this.selectedProduct = product;
      }
    }
  }

  removeProduct(product) {
    if(product.id) {
      this.productsService.removeProduct(product, (list) => {
        this.products = list;
      });
    }
  }

  openEdit(selectedProduct) {
    console.log('list')
    this.mode = 'edit';
    this.editProduct = Object.assign({}, selectedProduct);
    this.selectedProduct = null;
  }

  saveProduct(product) {
    this.newProduct = null;
    this.editProduct = null;
    if(product.id) {
      this.productsService.update(product, (list, product) => {
        this.products = list;
        this.selectedProduct = product;
      });
    } else {
      this.productsService.save(product, (list, product) => {
        this.products = list;
        this.selectedProduct = product;
      });
    }
  }

  openNew() {
    this.mode = 'new';
    this.selectedProduct = null;
    this.editProduct = null;
    this.newProduct = {
      name: '',
      price: 0
    };
  }
}
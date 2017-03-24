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
    this.productsService.getList().then(list => {
      this.products = list;
    });
  }

  saveChanges() {
    this.onSave.emit(this.editProduct);
    this.selectedProduct = this.editProduct;
    this.editProduct = null;
  }

  saveNewChanges() {
    this.onSave.emit(this.newProduct);
    this.newProduct = null;
  }

  // set setProducts(products) {

  //   for(let product of products) {

  //     let item = Object.assign({}, product);

  //     item.price = item.price * item.id;
      
  //   }

  //   this.products = products;
  // }

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

  openEdit(selectedProduct) {
    this.mode = 'edit';
    this.editProduct = Object.assign({}, selectedProduct);
    this.selectedProduct = null;
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

  // saveChanges() {
  //   console.log('this.editProduct', this.editProduct);

  //   //let product = this.products.find(item => item.id == this.editProduct.id);
    
  //   this.coKolwiek.emit(this.editProduct);

  // }

}
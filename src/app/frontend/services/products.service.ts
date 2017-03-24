import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';

@Injectable()
export class ProductsService {

  private productsUrl: string = 'http://localhost:3000/products';

  private http;

  constructor(http: Http) {
    this.http = http;
  }

  public getItem(productId, callback) {
    let url = this.productsUrl + '/' + productId;
    this.http.get(this.productsUrl).subscribe((response: Response) => {
      let item = response.json();
      callback(item);
    });
  }

  public getList(callback, product = null) {
    this.http.get(this.productsUrl).subscribe((response: Response) => {
      let list = response.json();
      if(product) {
        callback(list, product);
      } else {
        callback(list);
      }
    });
  }




}
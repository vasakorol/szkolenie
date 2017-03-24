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

  public save(product, callback) {
    this.http.post(this.productsUrl, product).subscribe((response: Response) => {
      let product = response.json();
      this.getList(callback, product);
    });
  }

  public update(product, callback) {
    let url = this.productsUrl + '/' + product.id;
    this.http.put(url , product).subscribe((response: Response) => {
      let product = response.json();
      this.getList(callback, product);
    });
  }

  public removeProduct(product, callback) {
    let url = this.productsUrl + '/' + product.id;
    this.http.delete(url).subscribe((response: Response) => {
      let data = response.json();
      console.log('response ', data);
      this.getList(callback);
    });
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
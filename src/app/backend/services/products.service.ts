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

  public getList() {
    return new Promise(resolve => {
      this.request(this.productsUrl).then(data => {
        setTimeout(() => {
          resolve(data);
        }, 5000);
      })
    });
  }
  
  private request(uri) {
      let request = null;
          request = this.http.get(uri);
      return request.map(response => response.json()).toPromise();
  };

}

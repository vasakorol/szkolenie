import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/share';
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
    //return 
    this.http
    .get(this.productsUrl)
    .map((response: Response) => {
      response.json();
    })
    //.toPromise();
  }

}

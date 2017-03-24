import { Component, OnInit } from '@angular/core';
//import {ProductsService} from '../services/products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  //public productsService;

  constructor() {
    //this.productsService = productsService;
    
  }

  ngOnInit() {
    // this.productsService.getList((list) => {
    //   console.log(list);
    // });
  }

}

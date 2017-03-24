import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  public list = [
    {
      id: 1,
      name: "Product 1",
      price: 10.99
    },
    {
      id: 2,
      name: "Product 2",
      price: 10.99
    },
    {
      id: 3,
      name: "Product 3",
      price: 10.99
    }
  ];


  saveList(product) {
    if(product.id) {
      let productlocal = this.list.find(item => item.id == product.id);
      Object.assign(productlocal, product);
    } else {
      product.id = this.list.length + 1;
      this.list.push(product);
    }
  }
}

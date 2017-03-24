import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-form',
  template: `
    <div class="card">
        <div class="card-block">
          <h4 class="card-title" *ngIf="product.id">Edit Product</h4>
          <h4 class="card-title" *ngIf="!product.id">New Product</h4>
            <form>
              <div class="form-group">
              <input type="text" name="name" [(ngModel)]="product.name" class="form-control" />
              </div>
              <div class="form-group">
              <input type="number" name="price" [(ngModel)]="product.price" class="form-control" />
              </div>
            </form>
          <p>
            <button class="btn btn-default" (click)="saveChanges()">Save product</button>
          </p>
        </div>
      </div>
  `,
  styles: []
})
export class ProductFormComponent implements OnInit {

  @Input()
  product = {};

  @Output('save')
  onSave = new EventEmitter();

  constructor() { }

  ngOnInit() {

  }

  saveChanges() {
    this.onSave.emit(this.product);
  }

}

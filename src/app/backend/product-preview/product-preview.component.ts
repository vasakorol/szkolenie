import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-preview',
  templateUrl: './product-preview.component.html',
  styleUrls: ['./product-preview.component.css']
})
export class ProductPreviewComponent implements OnInit {

  @Input('selectedProduct')
  product = {};

  @Output('openEdit')
  onOpenEdit = new EventEmitter();

  constructor() { }

  ngOnInit() {

  }

  openEdit() {
    this.onOpenEdit.emit(this.product);
  }

}

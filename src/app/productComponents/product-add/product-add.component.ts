import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import {Product} from '../../product';

@Component({
  selector: 'product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']

})
export class ProductAddComponent implements OnInit {


  @Output() onAdd: EventEmitter<Product> = new EventEmitter();

  private product: Product;

  constructor() {

   }

  ngOnInit() {
    this.product= new Product();
  }
  addProduct(){
    this.onAdd.emit(this.product);
  }


}

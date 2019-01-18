import { Component, OnInit } from '@angular/core';
import {PRODUCTLIST} from '../../PRODUCTS';
import {Product} from '../../product';

@Component({
  selector: 'products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

   products = PRODUCTLIST;

   productName: string = "LG Monitor";

   selectedProduct: Product;

   onProductSelected(product:Product)
   {
      this.selectedProduct = product;
   }


}

import { Component, OnInit } from '@angular/core';
import {PRODUCTLIST} from '../../PRODUCTS';
import {Product} from '../../product';

@Component({
  selector: 'products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  
  products: Product[] = [] ;

  constructor() { }

  ngOnInit() {
     this.products = [
      {id:1, name:'Samsung Mobile', price:10000},
      {id:2, name:'LG Mobile', price:12000},
      {id:3, name:'XIAOMI Mobile', price:8934},
      {id:4, name:'iPhone', price:35000},
      {id:5, name:'Nokia Mobile', price:6000},
  
  ];

  }

   

   productName: string = "LG Monitor";

   selectedProduct: Product;

   onProductSelected(product:Product)
   {
      this.selectedProduct = product;
   }

   onProductAdded(product:Product){
     this.products.push(product);
   }

}

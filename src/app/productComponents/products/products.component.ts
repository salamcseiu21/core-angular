import { Component, OnInit } from '@angular/core';
import {PRODUCTLIST} from '../../PRODUCTS';
import {Product} from '../../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  
  products: Product[] = [] ;

  constructor(private _productService:ProductService) {

   }

  ngOnInit() {
     this._productService.getProducts()
                        .subscribe(productList =>this.products = productList); 

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

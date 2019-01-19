import { Injectable } from '@angular/core';
import {PRODUCTLIST} from '../PRODUCTS';
import { of } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import {Product} from '../product';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) {

   }

  getProducts():Observable<Product[]>{
    var url = 'https://localhost:44368/api/products/';
    return this.http.get<Product[]>(url);
  }
}

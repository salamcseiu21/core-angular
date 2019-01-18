
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductsComponent } from './productComponents/products/products.component';
import {FormsModule} from '@angular/forms';
import { ProductItemComponent } from './productComponents/product-item/product-item.component'
import { CommonModule } from '@angular/common';
import { ProductAddComponent } from './productComponents/product-add/product-add.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ProductItemComponent,
    ProductAddComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

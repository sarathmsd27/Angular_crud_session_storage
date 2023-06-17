import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddProductComponent } from './add-product/add-product.component';
import { ProductViewComponent } from './product-view/product-view.component';
import {HttpClientModule} from '@angular/common/http';
import { UpdateProductComponent } from './update-product/update-product.component';
@NgModule({
  declarations: [
    AppComponent,
    AddProductComponent,
    ProductViewComponent,
    UpdateProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

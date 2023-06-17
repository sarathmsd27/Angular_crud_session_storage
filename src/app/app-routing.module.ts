import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';
import { ProductViewComponent } from './product-view/product-view.component';
import { UpdateProductComponent } from './update-product/update-product.component';

const routes: Routes = [
  {path:'',component:AddProductComponent},
  {path:'product-view',component:ProductViewComponent},
  {path:'update-product/:id',component:UpdateProductComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

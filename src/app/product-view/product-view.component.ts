import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { productdata } from '../productmodel';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.css']
})
export class ProductViewComponent implements OnInit{
 product:undefined|productdata[];

 constructor(private api:ApiService){}

 ngOnInit(): void {
   this.getproduct();
 }

 getproduct(){
  this.api.getproduct().subscribe((res)=>{
    this.product = res;
    console.log(res);
  })
 }

 deleteproduct(id:number){
  if(confirm("Are you sure want to delete"))
  this.api.deleteproduct(id).subscribe((res)=>{
     
  })
  this.getproduct();
 }
}

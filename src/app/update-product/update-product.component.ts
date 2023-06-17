import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';
import { productdata } from '../productmodel';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {
  dataid: any;
  public product:productdata={} as productdata;

  constructor(private api:ApiService, private activatedroute: ActivatedRoute, private router:Router) { }
  ngOnInit(): void {
    this.activatedroute.paramMap.subscribe((param) => {
      this.dataid = param['get']('id');
      console.log("data id is", this.dataid)
    })
    this.api.getproductbyid(this.dataid).subscribe((data:any)=>{
      this.product = data;
      console.log(this.product)
    })
  }
  update(){
    this.api.updateproduct(this.product,this.dataid).subscribe((data:any)=>{
      this.router.navigate(["./product-view"])
    })
  }
}

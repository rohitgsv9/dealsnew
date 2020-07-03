import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct, Product } from '../modal/product';
import { BackendService } from '../service/backend.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private activatedRoute : ActivatedRoute, private backend : BackendService, private router: Router) { }

  Product : IProduct;
  ngOnInit(): void {
    if(history.state.data !== undefined)
    {
      this.Product = history.state.data.product;    
    }else
    {
      this.backend.GetLatestDealsByID(this.activatedRoute.snapshot.params.id).subscribe((data)=>
      {
        this.Product = (data as IProduct[])[0]   
      })    
    }
  }
  UpdateProduct(product : Product)
  {    
    let routeUrl = "product/"+product.id;
    this.router.navigate([routeUrl], {state: {data: {product}}});
    this.Product = product; 
  }

}

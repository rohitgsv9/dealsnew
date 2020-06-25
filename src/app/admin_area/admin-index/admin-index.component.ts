import { Component, OnInit, Input } from '@angular/core';
import { BackendService } from 'src/app/service/backend.service';
import { Router } from '@angular/router';
import { Product, IProduct } from 'src/app/modal/product';
import { IBlog, Blog } from 'src/app/modal/blog';

@Component({
  selector: 'app-admin-index',
  templateUrl: './admin-index.component.html',
  styleUrls: ['./admin-index.component.css']
})
export class AdminIndexComponent implements OnInit {

 
  constructor(private backend : BackendService, private router: Router) { }

  ngOnInit(): void {

  }

  product = new Product();
  blog = new Blog();
  view : string;

  viewPage(page : string)
  {
    if(page === 'add_deal')
    {
      this.product = new Product();
      this.product.id = 0;
    }
    if(page === 'add_blog')
    {
      this.blog = new Blog();
    }
    this.view = page;
  }

  Logout()
  {
    this.backend.logout();
    this.router.navigate(['/cards'])
  }
  productPass(product: IProduct) {
    this.product = product;
    this.product.offer_price = parseInt(this.product.offer_price.toString());
    this.product.actual_price = parseInt(this.product.actual_price.toString());
    this.view = 'add_deal';    
  }

  blogPass(blog: IBlog) {
    this.blog = blog;
    this.view = 'add_blog';    
  }
}

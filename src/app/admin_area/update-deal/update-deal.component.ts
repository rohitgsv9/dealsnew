import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { BackendService } from 'src/app/service/backend.service';
import { IProduct, Product } from 'src/app/modal/product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-deal',
  templateUrl: './update-deal.component.html',
  styleUrls: ['./update-deal.component.css']
})
export class UpdateDealComponent implements OnInit {

  ProductList : IProduct[] = [];
  pageNumber = 1;

  constructor(private backend : BackendService, private router : Router) { }

  ngOnInit(): void {
    this.backend.getLatestDeals(this.pageNumber).subscribe((data)=>
    {
      (data as IProduct[]).forEach(element => {
        this.ProductList.push(element)
      });      
    })    
  }

  @Output() productPass : EventEmitter<Product> =   new EventEmitter();

  EditDeal(product : IProduct)
  {
    this.productPass.emit(product);
  }

  MoreDeal(direction : string)
  {
    if(direction === 'next')
    {
      window.scroll(0,0)
      this.backend.getLatestDeals(++this.pageNumber).subscribe((data)=>
      {
        this.ProductList = [];
        (data as IProduct[]).forEach(element => {
          this.ProductList.push(element)
        });      
      }) 
    }else if(direction === 'previous')
    {
      window.scroll(0,0)
      this.backend.getLatestDeals(--this.pageNumber).subscribe((data)=>
      {        
        this.ProductList = [];
        (data as IProduct[]).forEach(element => {
          this.ProductList.push(element)
        });      
      }) 
    }
  }

  DeleteDeal(id : number)
  {
    this.ProductList = this.ProductList.filter(temp => temp.id !== id)
    this.backend.deleteDeal(id);
  }


 

}
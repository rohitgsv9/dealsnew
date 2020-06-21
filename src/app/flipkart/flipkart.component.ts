import { Component, OnInit } from '@angular/core';
import { IProduct } from '../modal/product';
import { BackendService } from '../service/backend.service';

@Component({
  selector: 'app-flipkart',
  templateUrl: './flipkart.component.html',
  styleUrls: ['./flipkart.component.css']
})
export class FlipkartComponent implements OnInit {
  
  pageNumber = 1;

  ProductList : IProduct[] = [];

  constructor(private backend : BackendService) { }

  ngOnInit(): void {
    this.backend.getLatestDealsByStore('flipkart', this.pageNumber).subscribe((data)=>
    {
      this.ProductList = [];
      (data as IProduct[]).forEach(element => { 
          this.ProductList.push(element)
      });      
    })  
  }

  MoreDeal( )
  {
      this.backend.getLatestDealsByStore('flipkart',++this.pageNumber).subscribe((data)=>
      {
        (data as IProduct[]).forEach(element => {
          this.ProductList.push(element)
        });      
      }) 
    
  }

  ngOnDestroy()
  {
    this.ProductList = [];
  }

}

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
  moreDeals : boolean =true;
  show:boolean= true;
  constructor(private backend : BackendService) { }

  ngOnInit(): void {
    window.scroll(0,0)
    this.backend.getLatestDealsByStore('flipkart', this.pageNumber).subscribe((data)=>
    {
      this.show=false; 
      this.ProductList = [];
      (data as IProduct[]).forEach(element => { 
          this.ProductList.push(element)
      });      

      if((data as IProduct[]).length%30 == 0)
      {
        this.moreDeals = true;
      }
      else
      {
        this.moreDeals = false;
      }
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

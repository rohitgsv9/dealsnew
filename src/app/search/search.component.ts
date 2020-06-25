import { Component, OnInit } from '@angular/core';
import { IProduct } from '../modal/product';
import { BackendService } from '../service/backend.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  
  pageNumber = 1;

  ProductList : IProduct[] = [];

  constructor(private backend : BackendService, private activatedRoute : ActivatedRoute) { }

  Keyword : string;
  ngOnInit(): void {

    if(this.activatedRoute.snapshot.params.keyword  !== undefined)
    {
      this.Keyword = this.activatedRoute.snapshot.params.keyword 
      this.backend.getLatestDealsByKeyword(this.Keyword, this.pageNumber).subscribe((data)=>
      {
        this.ProductList = [];
        (data as IProduct[]).forEach(element => { 
            this.ProductList.push(element)
        });      
      })     
    }
    
  }

  MoreDeal( )
  {
      this.backend.getLatestDealsByKeyword(this.Keyword,++this.pageNumber).subscribe((data)=>
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

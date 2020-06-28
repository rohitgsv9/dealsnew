import { Component, OnInit } from '@angular/core';
import { BackendService } from '../service/backend.service';
import { IProduct } from '../modal/product';

@Component({
  selector: 'app-trending',
  templateUrl: './trending.component.html',
  styleUrls: ['./trending.component.css']
})
export class TrendingComponent implements OnInit {
 
  i=0
  interval:any


  ProductList : IProduct[] = [];

  //loader
  show:boolean= true;
  moreDeals : boolean =true;

  constructor(private backend : BackendService) { }

  async ngOnInit() {
    // this is for initial api hit
 this.hitLatestDealsApi()  
 // this is for hitting api every minute
 this.hitApiEveryMinute()
  }

async hitLatestDealsApi()
{
  this.show=true;
  
  this.backend.getTrendingDeals().subscribe((data)=>
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


  async hitApiEveryMinute(){

    this.interval=setInterval(async()=>{
      this.i++;
      this.hitLatestDealsApi()
      // let product =await  this.backend.FetchProduct(this.Link);
     /* Do something here */
    }
    ,10*6000)
  }

}
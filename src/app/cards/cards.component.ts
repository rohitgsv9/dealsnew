import { Component, OnInit } from '@angular/core';
import { BackendService } from '../service/backend.service';
import { IProduct } from '../modal/product';


@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  Link:any="https://www.amazon.in/D-Link-DIR-615-Wireless-N300-Router-Black/dp/B0085IATT6/ref=lp_21488193031_1_1?s=computers&ie=UTF8&qid=1592671364&sr=1-1"
  i=0
  interval:any
  pageNumber = 1;

  ProductList : IProduct[] = [];

  constructor(private backend : BackendService) { }

  async ngOnInit() {
    // this is for initial api hit
 this.hitLatestDealsApi()  
 // this is for hitting api every minute
 this.hitApiEveryMinute()

 // this  is for hitting amazon api's
    let data1=await  this.getProduct();
    console.log("data==",data1)
  }

async hitLatestDealsApi()
{
  
  this.backend.getLatestDeals(this.pageNumber).subscribe((data)=>
  {
    this.ProductList = [];
    (data as IProduct[]).forEach(element => { 
        this.ProductList.push(element)
    });      
  })  
}

  async getProduct(){
    let product =await  this.backend.FetchProduct(this.Link);
    return product;

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

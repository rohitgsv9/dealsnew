import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {  Product } from '../modal/product';
import { JsonPipe } from '@angular/common';

const httpOptions =  {
  headers: new HttpHeaders(
    {
      'Content-Type' : 'application/json',
      
      "Access-Control-Allow-Origin":"*"    
    })
};

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor(private http: HttpClient) { }

  apiUrl  = "https://comparehatke.com/admin_area/thuttu/";

  getLatestDeals() 
  {
    return  this.http.get(this.apiUrl+'thuttu-api.php');
  }

  GetLatestDealsByID(id : number)
  {
    this.apiUrl = this.apiUrl+"thuttu-api.php?id="+id;
    return this.http.get(this.apiUrl);
  }


  async FetchProduct(url : string) : Promise<Product>
  { 
   await  this.http.get(url, {responseType: 'text'}).subscribe((data : any) =>
    {
      if(url.search("amazon") !== -1)
      {          
          this.GetAmazonProduct(data);
          this.product.logo = "amazon"
          this.product.url = url
      }
      if(url.search("flipkart") !== -1)
      {          
          this.GetFlipkartProduct(data);
          this.product.logo = "flipkart"
          this.product.url = url
      }

      return this.product;
    })
    return null;
  }

  product = new Product();

  GetFlipkartProduct(data : string)
  {    
    let value = data.split('class="_35KyD6"',2);
    value = value.length > 1 ? value[1].split('>', 3) : [];
    value = value.length > 1 ? value[1].split('</',2) : [];
    this.product.name = value.length > 0 ? value[0].replace('<!-- --','') : "";

    value = data.split('class="_2_AcLJ"',2);
    value = value.length > 1 ? value[1].split('background-image:url(', 2) : [];
    value =  value.length > 1 ? value[1].split(')',2) : [];
    this.product.image = value.length > 0 ? value[0] : "";

    value = data.split('class="_1vC4OE _3qQ9m1"',2);
    value = value.length > 1 ? value[1].split('>', 2) : [];
    value = value.length > 1 ? value[1].split('</',2): [];
    let temp= value.length > 0 ? value[0].replace('₹','') : "";
    this.product.offer_price =  Number.parseFloat(temp.replace(',',''));

    value = data.split('class="_3auQ3N _1POkHg"',2);
    value = value.length > 1 ? value[1].split('>', 3) : [];
    value = value.length > 1 ? value[2].split('</',2) : [];
    temp= value.length > 0 ? value[0].replace('₹','') : "";
    this.product.actual_price =  Number.parseFloat(temp.replace(',',''));
      
  }
  


  GetAmazonProduct(data : string)
  {    
    let value = data.split('id="productTitle"',2);
    value = value.length > 1 ? value[1].split('>', 2) : [];
    value =  value.length > 1 ? value[1].split('</',2) : [];
    this.product.name =  value.length > 0 ? value[0].replace(/\n/ig, '') : "";

    value = data.split('class="image item',2);
    value = value.length > 1 ? value[1].split('<img', 2) : [];
    value = value.length > 1 ? value[1].split('data-old-hires="',2) : [];
    value = value.length > 1 ? value[1].split('"',2) : [];
    this.product.image =  value.length > 0 ? value[0] : "";

    value = data.split('id="priceblock_ourprice"',2);
    value = value.length > 1 ? value[1].split('>', 2) : [];
    value = value.length > 1 ? value[1].split('</',2) : [];
    value = value.length > 0 ? value[0].split('.',2) : [];
    let temp= value.length > 0 ? value[0].replace('₹','') : "";
    this.product.offer_price =  Number.parseFloat(temp.replace(',',''));

    value = data.split('class="priceBlockStrikePriceString a-text-strike"',2);
    value = value.length > 1 ? value[1].split('>', 2) : [];
    value = value.length > 1 ? value[1].split('</',2) : [];
    value = value.length > 0 ? value[0].split('.',2) : [];
    temp= value.length > 0 ?  value[0].replace('₹','') : "";
    this.product.actual_price =  Number.parseFloat(temp.replace(',',''));
      
  }

   AddDeal(product : Product)
  {
    let data = JSON.stringify(product);
    return  this.http.post("https://comparehatke.com/admin_area/thuttu/add-deal.php", data).subscribe(
      (response) => console.log(response),
      (error) => console.log(error)
    )
  }

}

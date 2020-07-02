import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {  Product } from '../modal/product';
import { User } from '../modal/user';
import {  BehaviorSubject,  Observable } from 'rxjs';
import { Blog } from '../modal/blog';
import { Caro } from '../modal/caro';

const httpOptions =  {
  headers: new HttpHeaders(
    {
      'Content-Type' : 'application/json',
      'Access-Control-Allow-Methods': 'HEAD, GET, POST, PUT, PATCH, DELETE',            
      "Access-Control-Allow-Origin":"*"    
    })
};

@Injectable({
  providedIn: 'root'
})
export class BackendService { 

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject < any > (JSON.parse(localStorage.getItem('currentUser')));
   this.currentUser = this.currentUserSubject.asObservable();
   }

  apiUrl  = "https://cors-anywhere.herokuapp.com/"+"https://autoaffiliate.in/vishnu/"; //
//apiUrl  = "http://localhost:8090/NewTheme/"; //"https://cors-anywhere.herokuapp.com/"+

  getLatestDeals(page : number) 
  {
    return  this.http.get(this.apiUrl+'deals-api.php?page='+page);
  }

  getCaro() 
  {
    return  this.http.get(this.apiUrl+'caro-api.php');
  }

  getTrendingDeals() 
  {
    return  this.http.get(this.apiUrl+'deals-api.php');
  }

  GetLatestDealsByID(name : string)
  {
    let url= this.apiUrl+"deals-api.php?id="+name;
    return this.http.get(url);
  }

  getLatestDealsByStore(store : string, page : number)
  {
    let url = this.apiUrl+"deals-api.php?store="+store+"&page="+page;
    return this.http.get(url);
  }

  getLatestDealsByKeyword(search : string, page : number)
  {
    let url = this.apiUrl+"deals-api.php?search="+search+"&page="+page;
    return this.http.get(url);
  }

  async deleteDeal(id : number) 
  {
    return await this.http.get(this.apiUrl+"delete-deal.php?id="+id).toPromise();
  }


  getBlog() 
  {
    return  this.http.get(this.apiUrl+'blog-api.php');
  }

  deleteBlog(id : number) 
  {
      return  this.http.delete(this.apiUrl+"delete-blog.php?id="+id).toPromise();
  }

  deleteCaro(id : number) 
  {
    return  this.http.delete(this.apiUrl+"delete-caro.php?id="+id).toPromise();
  }

  GetBlogById(id : number)
  {
    let url = this.apiUrl+"blog-api.php?id="+id;
    return this.http.get(url);
  }


  async FetchProduct(url : string) : Promise<Product>
  { 
    console.log("url==",url)

    try {
         
        let data=  await  this.http.get("https://cors-anywhere.herokuapp.com/"+url, {responseType: 'text'}).toPromise()
        console.log("data==backend")
  
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
        data = null;
       return this.product;

  } catch (error) {
    console.log("data==error",error)

      
     return null;
  }
  }

  product = new Product();

  GetFlipkartProduct(data : string)
  {    
    let value = data.split('class="_35KyD6"',2);
    value = value.length > 1 ? value[1].split('>', 3) : [];
    value = value.length > 1 ? value[1].split('</',2) : [];
    this.product.name = value.length > 0 ? value[0].replace('<!-- --','') : "";

    value = data.split('class="_2_AcLJ',2);
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

    value = data.split('class="_3WHvuP"',2);
    value = value.length > 1 ? value[1].split('<ul>', 3) : [];
    value = value.length > 1 ? value[1].split('</ul>',2) : [];
    this.product.desc =  value.length > 0 ? value[0] : "";
      
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

    if(this.product.image === "")
    {
      value = data.split('class="imgTagWrapper',2);
      value = value.length > 1 ? value[1].split('<img', 2) : [];
      value = value.length > 1 ? value[1].split('data-a-dynamic-image="',2) : [];
      value = value.length > 1 ? value[1].split(';',2) : [];
      value = value.length > 1 ? value[1].split('&quot',2) : [];
      this.product.image =  value.length > 0 ? value[0] : ""; 
    }

    value = data.split('id="priceblock_ourprice"',2);
    value = value.length > 1 ? value[1].split('>', 2) : [];
    value = value.length > 1 ? value[1].split('</',2) : [];
    value = value.length > 0 ? value[0].split('.',2) : [];
    let temp= value.length > 0 ? value[0].replace('₹','') : "";
    this.product.offer_price =  Number.parseFloat(temp.replace(',',''));

    if(temp === "")
    {
      value = data.split('priceblock_dealprice"',2);
      value = value.length > 1 ? value[1].split('>', 2) : [];
      value = value.length > 1 ? value[1].split('</',2) : [];
      value = value.length > 0 ? value[0].split('.',2) : [];
      let temp= value.length > 0 ? value[0].replace('₹','') : "";
      this.product.offer_price =  Number.parseFloat(temp.replace(',','')); 
    }

    if(temp === "")
    {
      value = data.split('priceblock_saleprice"',2);
      value = value.length > 1 ? value[1].split('>', 2) : [];
      value = value.length > 1 ? value[1].split('</',2) : [];
      value = value.length > 0 ? value[0].split('.',2) : [];
      let temp= value.length > 0 ? value[0].replace('₹','') : "";
      this.product.offer_price =  Number.parseFloat(temp.replace(',',''));       
    }

    value = data.split('class="priceBlockStrikePriceString a-text-strike"',2);
    value = value.length > 1 ? value[1].split('>', 2) : [];
    value = value.length > 1 ? value[1].split('</',2) : [];
    value = value.length > 0 ? value[0].split('.',2) : [];
    temp= value.length > 0 ?  value[0].replace('₹','') : "";
    this.product.actual_price =  Number.parseFloat(temp.replace(',',''));

    value = data.split('id="feature-bullets"',2);
    value = value.length > 1 ? value[1].split('<ul class="a-unordered-list a-vertical a-spacing-mini">', 2) : [];
    value = value.length > 1 ? value[1].split('</ul>',2) : [];
    this.product.desc= value.length > 0 ?  value[0] : "";
      
  }

  async AddDeal(product : Product)
  {
    let data = JSON.stringify(product);
    return await this.http.post(this.apiUrl+"add-deal.php", data).toPromise()
    
  }

  async UpdateDeal(product : Product)
  {
    let data = JSON.stringify(product);
    return await  this.http.post(this.apiUrl+"update-deal.php", data).toPromise()
  }

  async AddCaro(caro : Caro)
  {
    let data = JSON.stringify(caro);
    return await this.http.post(this.apiUrl+"add-caro.php", data).toPromise()
    
  }

  async UpdateCaro(caro : Caro)
  {
    let data = JSON.stringify(caro);
    return await  this.http.post(this.apiUrl+"update-caro.php", data).toPromise()
  }

  AddBlog(blog : Blog)
  {
    let data = JSON.stringify(blog);
    return  this.http.post(this.apiUrl+"add-blog.php", data).subscribe(
      (response) => console.log(response),
      (error) => console.log(error)
    )
  }

  UpdateBlog(blog : Blog)
  {
    let data = JSON.stringify(Blog);
    return  this.http.post(this.apiUrl+"update-blog.php", data).subscribe(
      (response) => console.log(response),
      (error) => console.log(error)
    )
  }

  private currentUserSubject: BehaviorSubject < any > ;
  public currentUser: Observable < any > ;

  public get currentUserValue(): any {
    return this.currentUserSubject.value;
   }
  

  async Login(user : User)
  {
    let data = JSON.stringify(user);
    let loginSuccess = false;
    let result =  await this.http.post(this.apiUrl+"login-user.php", data).toPromise();

      if(result)
        {
          loginSuccess = true; 
          localStorage.setItem('user', data)
        }
        else
        {
          alert(false);
        }

        if (loginSuccess) {
          localStorage.setItem('currentUser', JSON.stringify(user));
          localStorage.setItem('isLoggedIn', "true");
          this.currentUserSubject.next(user);
        }
      
     return loginSuccess;
  }

   
  logout(): void {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  
    localStorage.setItem('isLoggedIn', 'false');
    localStorage.removeItem('token');
   }

}
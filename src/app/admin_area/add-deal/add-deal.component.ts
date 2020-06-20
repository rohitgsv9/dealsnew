import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/modal/product';
import { BackendService } from 'src/app/service/backend.service';

@Component({
  selector: 'app-add-deal',
  templateUrl: './add-deal.component.html',
  styleUrls: ['./add-deal.component.css']
})
export class AddDealComponent implements OnInit {

  constructor(private backend : BackendService) { }

  ngOnInit(): void {

    this.product.name = "Amazon Brand - Inkast D Sneakers"
    this.product.image = "https://images-na.ssl-images-amazon.com/images/I/81ivrVljMwL._UL1500_.jpg";
    this.product.offer_price = 799
    this.product.actual_price=899
    this.product.logo="amazon"
    this.product.url = "https://www.amazon.in/d/B07VLLL4BP?=&tag=dealhind-21&source=indiafreestuff.in&app=ifs";
    this.product.id = 123;
    this.product.date = "10m";
    this.onSubmit();

  }

  product = new Product();

  submitted = false;

  onSubmit()
  { 
    this.backend.AddDeal(this.product); 
    
  }

}

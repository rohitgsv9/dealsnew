import { Component, OnInit } from '@angular/core';
import { BackendService } from '../service/backend.service';
import { IProduct } from '../modal/product';


@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  ProductList : IProduct[] = [];

  constructor(private backend : BackendService) { }

  ngOnInit(): void {
    this.backend.getLatestDeals().subscribe((data)=>
    {
      (data as IProduct[]).forEach(element => {
        this.ProductList.push(element)
      });      
    })    
  }
}

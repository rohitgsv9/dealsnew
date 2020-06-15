import { Component, OnInit, Input } from '@angular/core';
import { IProduct } from '../modal/product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  @Input() product : IProduct;

  ViewProduct(product: IProduct)
  {
    let routeUrl = "product/"+product.id;
    this.router.navigate([routeUrl], {state: {data: {product}}});
  }
}

import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
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
    window.scroll(0,0)
  }

  @Input() product : IProduct;

  @Output() productPass : EventEmitter<IProduct> =   new EventEmitter();

  ViewProduct(product: IProduct)
  {
    window.scroll(0,0)
    let name = product.name.replace(/\s/g, '-')
    let routeUrl = "product/"+product.id+"/"+name;
    this.router.navigate([routeUrl], {state: {data: {product}}});
    this.productPass.emit(product);
    
  }
}

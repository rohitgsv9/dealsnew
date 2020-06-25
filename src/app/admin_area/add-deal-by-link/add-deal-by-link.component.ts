import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { BackendService } from 'src/app/service/backend.service';
import { IProduct } from 'src/app/modal/product';

@Component({
  selector: 'app-add-deal-by-link',
  templateUrl: './add-deal-by-link.component.html',
  styleUrls: ['./add-deal-by-link.component.css']
})
export class AddDealByLinkComponent implements OnInit {

  constructor(private backend: BackendService) { }

  ngOnInit(): void {
  }

  Link : string = '';

  @Output() productPass : EventEmitter<IProduct> =   new EventEmitter();

  async FetchProduct()
  {
    if(this.Link !== '')
    {      
      let product = await this.backend.FetchProduct(this.Link);
      product.id =0;
      this.productPass.emit(product);
    }
  }
}

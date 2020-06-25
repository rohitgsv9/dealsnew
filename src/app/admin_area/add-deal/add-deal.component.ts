import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
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
    if(this.product.id == 0)
    {
      this.buttonValue = "Add Deal";
    }
    else if(this.product.name !== undefined)
    {
      this.buttonValue = "Update Deal";      
    }
  }

  buttonValue = "Add Deal";
 @Input() product = new Product();

  submitted = false;

  @Output() page : EventEmitter<string> =   new EventEmitter();

  async onSubmit()
  { if(this.buttonValue === "Add Deal")
    {
      await this.backend.AddDeal(this.product); 
      this.page.emit('update_deal');
    }
    else
    {      
      await this.backend.UpdateDeal(this.product); 
      this.page.emit('update_deal');
    }    
  }


}

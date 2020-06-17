import { Component, OnInit } from '@angular/core';
import { BackendService } from 'src/app/service/backend.service';

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

  FetchProduct()
  {
    if(this.Link !== '')
    {      
      let product = this.backend.FetchProduct(this.Link);
    }
  }
}

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



  FetchProduct()
  {
    this.backend.FetchProduct("https://www.amazon.in/dp/B07X8V5YKR/ref=sspa_dk_detail_1?psc=1&pd_rd_i=B07X8V5YKR&pd_rd_w=hMRd5&pf_rd_p=1801b34c-8af9-42b5-8961-11f124edc99b&pd_rd_wg=ygpyU&pf_rd_r=R5X15HMKJZVDZGDV4WD9&pd_rd_r=efa94815-8ff4-46ef-8ede-ab2ec182503d&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUEyMTk1RTQwUDVIMU1OJmVuY3J5cHRlZElkPUEwNDU4Mjk1UzhTNzBNNEdNT1dCJmVuY3J5cHRlZEFkSWQ9QTA3NjI3NTk1WEo2NDcxTjhMV0omd2lkZ2V0TmFtZT1zcF9kZXRhaWwmYWN0aW9uPWNsaWNrUmVkaXJlY3QmZG9Ob3RMb2dDbGljaz10cnVl");
  }

}

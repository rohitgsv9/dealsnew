import { Component, OnInit } from '@angular/core';

import { BackendService } from '../service/backend.service';
import { ICaro } from '../modal/caro';

@Component({
  selector: 'app-caro',
  templateUrl: './caro.component.html',
  styleUrls: ['./caro.component.css']
})
export class CaroComponent implements OnInit {

  Caro : ICaro;
  constructor(private backend : BackendService) { }

  ngOnInit(): void {
    window.scroll(0,0)
    this.backend.getCaro().subscribe((data)=>
    {
      this.Caro = data[0]
      
    })
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-update-caro',
  templateUrl: './update-caro.component.html',
  styleUrls: ['./update-caro.component.css']
})
export class UpdateCaroComponent implements OnInit {

  constructor() { }
  ngOnInit(): void {
  }
  selectedProd:string;
  
  product= [
    {proimg:'../../assets/amazon logo.png', name:'Laptop'},
    {proimg:'../../assets/flipkart logo.jpg', name:'Mobile'},
    // {proimg:'../../assets/logo1.jpg', name:'TV', id:'pro3'},
    // {proimg:'../../assets/im9.png', name:'Washing Machine'}
  ]

}
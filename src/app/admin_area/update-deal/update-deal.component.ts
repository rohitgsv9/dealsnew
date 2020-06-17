import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-update-deal',
  templateUrl: './update-deal.component.html',
  styleUrls: ['./update-deal.component.css']
})
export class UpdateDealComponent implements OnInit {

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

  users = [];

  createUser(uname) {
    this.users.push({
      name:uname.value
    });
  }

  removeUser() {
    this.users.splice(this.users.length-1);
  }

  

}
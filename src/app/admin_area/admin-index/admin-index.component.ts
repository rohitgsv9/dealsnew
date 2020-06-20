import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-index',
  templateUrl: './admin-index.component.html',
  styleUrls: ['./admin-index.component.css']
})
export class AdminIndexComponent implements OnInit {

 
  constructor() { }

  ngOnInit(): void {
  }

  view : string = 'add-blog';

  viewPage(page : string)
  {
    this.view = page;
  }
}

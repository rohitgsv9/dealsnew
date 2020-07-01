import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  Keyword : string ="";
    SearchProduct()
    {
      if(this.Keyword !== "")
      {
      let routeUrl = "search/"+this.Keyword;
      this.router.navigate([routeUrl]);
      }
    }
}

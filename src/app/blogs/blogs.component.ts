import { Component, OnInit } from '@angular/core';
import { IBlog } from '../modal/blog';
import { BackendService } from '../service/backend.service';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit {

  BlogList : IBlog[] = [];
  constructor(private backend : BackendService) { }

  ngOnInit(): void {
    this.backend.getBlog().subscribe((data)=>
    {
      (data as IBlog[]).forEach(element => {
        this.BlogList.push(element)
      });      
    })    
  }

}

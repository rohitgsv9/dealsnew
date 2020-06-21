import { Component, OnInit } from '@angular/core';
import { IBlog } from '../modal/blog';
import { BackendService } from '../service/backend.service';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css']
})
export class BlogListComponent implements OnInit {
  
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
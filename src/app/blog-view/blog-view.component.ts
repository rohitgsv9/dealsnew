import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BackendService } from '../service/backend.service';
import { IBlog } from '../modal/blog';

@Component({
  selector: 'app-blog-view',
  templateUrl: './blog-view.component.html',
  styleUrls: ['./blog-view.component.css']
})
export class BlogViewComponent implements OnInit {

  constructor(private activatedRoute : ActivatedRoute, private backend : BackendService) { }

  Blog : IBlog;

  //loader
  show:boolean=true;

  BlogList : IBlog[] = [];

  ngOnInit(): void {
    if(history.state.data !== undefined)
    {
      this.Blog = history.state.data.blog;    
    }else
    {
      this.show=true;
      this.backend.GetBlogById(this.activatedRoute.snapshot.params.id).subscribe((data)=>
      {
        this.Blog = (data as IBlog[])[0] 
        this.backend.getBlog().subscribe((data)=>
        {
          (data as IBlog[]).forEach(element => {
            this.BlogList.push(element)
          }); 
          this.show=false;     
        })      
      })    
    }
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BackendService } from '../service/backend.service';
import { IBlog } from '../modal/blog';

@Component({
  selector: 'app-blog-page',
  templateUrl: './blog-page.component.html',
  styleUrls: ['./blog-page.component.css']
})
export class BlogPageComponent implements OnInit {

  constructor(private activatedRoute : ActivatedRoute, private backend : BackendService) { }

  Blog : IBlog;

  ngOnInit(): void {
    window.scroll(0,0)
    if(history.state.data !== undefined)
    {
      this.Blog = history.state.data.blog;    
    }else
    {
      this.backend.GetBlogById(this.activatedRoute.snapshot.params.id).subscribe((data)=>
      {
        this.Blog = (data as IBlog[])[0]   
      })    
    }
  }

}

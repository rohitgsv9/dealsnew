import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { BackendService } from 'src/app/service/backend.service';

import { Router } from '@angular/router';
import { IBlog, Blog } from 'src/app/modal/blog';

@Component({
  selector: 'app-update-blog',
  templateUrl: './update-blog.component.html',
  styleUrls: ['./update-blog.component.css']
})
export class UpdateBlogComponent implements OnInit {

  pageNumber = 1;
  BlogList : IBlog[] = [];

  constructor(private backend : BackendService, private router : Router) { }

  ngOnInit(): void {
    this.backend.getBlogByPage(this.pageNumber).subscribe((data)=>
    {
      (data as IBlog[]).forEach(element => {
        this.BlogList.push(element)
      });      
    })    
  }

  @Output() blogPass : EventEmitter<IBlog> =   new EventEmitter();

  EditBlog(blog : IBlog)
  {
    this.blogPass.emit(blog);
  }

  DeleteBlog(id : number)
  {
    this.BlogList = this.BlogList.filter(temp => temp.id !== id)
    this.backend.deleteBlog(id);
  }

  MoreDeal(direction : string)
  {
    if(direction === 'next')
    {
      window.scroll(0,0)
      this.backend.getBlogByPage(++this.pageNumber).subscribe((data)=>
      {
        this.BlogList = [];
        (data as IBlog[]).forEach(element => {
          this.BlogList.push(element)
        });      
      }) 
    }else if(direction === 'previous')
    {
      window.scroll(0,0)
      this.backend.getBlogByPage(--this.pageNumber).subscribe((data)=>
      {        
        this.BlogList = [];
        (data as IBlog[]).forEach(element => {
          this.BlogList.push(element)
        });      
      }) 
    }
  }
}
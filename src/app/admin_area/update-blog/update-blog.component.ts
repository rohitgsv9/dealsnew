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

  BlogList : IBlog[] = [];

  constructor(private backend : BackendService, private router : Router) { }

  ngOnInit(): void {
    this.backend.getBlog().subscribe((data)=>
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

}
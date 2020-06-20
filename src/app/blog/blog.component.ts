import { Component, OnInit, Input } from '@angular/core';
import { IBlog } from '../modal/blog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  @Input() blog : IBlog;

  
ViewBlog(blog: IBlog)
{
  let routeUrl = "blog/"+blog.id;
  this.router.navigate([routeUrl], {state: {data: {blog}}});
}
}

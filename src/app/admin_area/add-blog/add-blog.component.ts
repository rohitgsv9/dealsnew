import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Blog } from 'src/app/modal/blog';
import { BackendService } from 'src/app/service/backend.service';

@Component({
  selector: 'app-add-blog',
  templateUrl: './add-blog.component.html',
  styleUrls: ['./add-blog.component.css']
})
export class AddBlogComponent implements OnInit {

  constructor(private backend : BackendService) { }

  ngOnInit(): void {
    if(this.blog.heading !== undefined)
    {
      this.buttonValue = "Update Blog";      
    }
  }

  buttonValue = "Add Blog";
 @Input() blog = new Blog();

  submitted = false;

  @Output() page : EventEmitter<string> =   new EventEmitter();

  onSubmit()
  { if(this.buttonValue === "Add Blog")
    {
      this.backend.AddBlog(this.blog); 
      this.page.emit('update_blog');

    }
    else
    {      
      this.backend.UpdateBlog(this.blog); 
      this.page.emit('update_blog');
    }    
  }


}

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
  pageNumber = 1;
  moreDeals : boolean =true;

  //loader
  show:boolean=true;
  constructor(private backend : BackendService) { }

  ngOnInit(): void 
  {
    this.show=true;
    this.backend.getBlogByPage(this.pageNumber).subscribe((data)=>
    {
      (data as IBlog[]).forEach(element => {
        this.BlogList.push(element)
        this.show=false;
      });           
          
      if((data as IBlog[]).length%12 == 0)
      {
        this.moreDeals = true;
      }
      else
      {
        this.moreDeals = false;
      }
      
    })   

    
  }

  MoreDeal( )
  {
    if(this.moreDeals)
    {
      this.backend.getBlogByPage(++this.pageNumber).subscribe((data)=>
      {
        (data as IBlog[]).forEach(element => {
          this.BlogList.push(element)
        });      
      }) 
    }    
  }

}
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { BackendService } from 'src/app/service/backend.service';
import { Router } from '@angular/router';
import { ICaro } from 'src/app/modal/caro';

@Component({
  selector: 'app-update-caro',
  templateUrl: './update-caro.component.html',
  styleUrls: ['./update-caro.component.css']
})
export class UpdateCaroComponent implements OnInit {

  CaroList : ICaro[] = [];

  constructor(private backend : BackendService, private router : Router) { }

  ngOnInit(): void {
    this.backend.getCaro().subscribe((data)=>
    {
      (data as ICaro[]).forEach(element => {
        this.CaroList.push(element)
      });      
    })    
  }

  @Output() caroPass : EventEmitter<ICaro> =   new EventEmitter();

  EditCaro(caro : ICaro)
  {
    this.caroPass.emit(caro);
  }

  DeleteCaro(id : number)
  {
    this.CaroList = this.CaroList.filter(temp => temp.id !== id)
    this.backend.deleteCaro(id);
  }


}
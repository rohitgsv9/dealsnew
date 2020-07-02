import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { BackendService } from 'src/app/service/backend.service';
import { Caro } from 'src/app/modal/caro';

@Component({
  selector: 'app-add-caro',
  templateUrl: './add-caro.component.html',
  styleUrls: ['./add-caro.component.css']
})
export class AddCaroComponent implements OnInit {

  constructor(private backend : BackendService) { }

  ngOnInit(): void {
    if(this.caro.image !== undefined)
    {
      this.buttonValue = "Update Caro";      
    }
  }

  buttonValue = "Add Caro";
 @Input() caro = new Caro();

  submitted = false;

  @Output() page : EventEmitter<string> =   new EventEmitter();

  async onSubmit()
  { if(this.buttonValue === "Add Caro")
    {
     await this.backend.AddCaro(this.caro); 
      this.page.emit('update_caro');

    }
    else
    {      
     await this.backend.UpdateCaro(this.caro); 
      this.page.emit('update_caro');
    }    
  }


}

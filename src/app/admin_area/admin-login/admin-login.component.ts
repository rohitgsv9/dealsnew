import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/modal/user';
import { BackendService } from 'src/app/service/backend.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  constructor(private backend: BackendService, private router: Router) {
    if (this.backend.currentUserValue) {
      this.router.navigate(['/admin']);
  }
   }

  ngOnInit(): void {
  }

  user = new User();
  
  async onSubmit()
  {
    let loginStatus = await this.backend.Login(this.user);
    if(loginStatus)
    {
      this.router.navigate(['/admin']);
      
    }
  }

}

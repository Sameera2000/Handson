import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username:string = '';
  password:string = '';
  message: string = '';
  loginStatus: boolean = false;
  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
  }

  login(){
    if(this.username === 'admin' && this.password === 'password'){
      this.router.navigate(['/editempreactive']);
      this.authService.login();
      this.loginStatus = this.authService.isLoggedIn();
      console.log(this.loginStatus);
    }
    else{
      this.message = 'Invalid Username/Password';
    }
  }
}

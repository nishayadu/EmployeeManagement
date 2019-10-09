import { Component, OnInit } from '@angular/core';
import { Routes, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  public username:string="";
  public password:string="";
  public message:string="";

  public check_login():void{

    if(this.username == 'admin' && this.password=='password')
    {
      this.router.navigateByUrl('/employee-list');
    }
    else
    {
      this.message="Sorry!! You have Entered Incorrect Username or Password";
    }
  }

}

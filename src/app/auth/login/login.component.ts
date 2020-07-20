import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  genders = ['male','female']
  @ViewChild('loginForm') loginForm
  model = {name:'',confirmName:'',password:'',gender:'male'};
  submitted = false 
  constructor() { }

  ngOnInit(): void {
  }
  
  onSubmit(){
    console.log(this.loginForm)
    // this.submitted = true;
  }


  get diagnostic() { return JSON.stringify(this.model); }
}

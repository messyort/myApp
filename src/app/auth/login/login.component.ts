import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm
  model = {name:'',password:''};
  constructor() { }

  ngOnInit(): void {
  }



  get diagnostic() { return JSON.stringify(this.model); }
}

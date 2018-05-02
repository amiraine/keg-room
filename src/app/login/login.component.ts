import { Component, OnInit } from '@angular/core';
import { Login } from '../models/login.model';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor() { }
  ngOnInit() {
  }
  authenticate(userPin){
    const employeePin = 'beer';
    if(userPin === employeePin){
      return alert('You are now logged in!')
    } else {
      alert('You\'ve entered an incorrect PIN. Please try again or enter the site as a customer.');
    }
  }
}

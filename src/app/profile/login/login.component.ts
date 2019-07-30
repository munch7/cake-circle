import { Component, OnInit, Output, Input } from '@angular/core';
import { stringify } from '@angular/compiler/src/util';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @Input() element : {username: string, email: string, password:string}

  constructor() { }

  ngOnInit() {
  }

}


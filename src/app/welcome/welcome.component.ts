import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  allowNewServer = false;
  alloNew = false;
  userName= '';
  profileCreation = '';
  profileWelcome = '';
  location = "" ;
  locate = "";
  locale = "";
  deliver = "";

  constructor()  { 
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
    
  }

  ngOnInit() {
  }
  onCreateServer() {
    this.profileCreation = 'Nice to meet you '+ this.userName;
    this.profileWelcome = ', welcome to Cake 360';
    setTimeout(() => {
      this.location = 'Where are you from '+ this.userName;
      this.deliver = "?"
    }, 3000);
  }

  onCreateLocal() {
    this.locale = this.userName + " from " + this.locate;
  }

  onUpdateName(event: any) {
    this.userName = (<HTMLInputElement>event.target).value;
  }

  onUpdateLocation(event: any) {
    this.locate = (<HTMLInputElement>event.target).value;
  }
}

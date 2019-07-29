import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  allowNewServer = false;
  serverName= '';
  serverCreationStatus = '';
  serverStatus = '';
  location = "" ;
  deliver = "";

  constructor()  { 
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
    
  }

  ngOnInit() {
  }
  onCreateServer() {
    this.serverCreationStatus = 'Nice to meet you '+ this.serverName;
    this.serverStatus = ', welcome to new Delish';
    setTimeout(() => {
      this.location = 'Where are u from '+ this.serverName;
    }, 3000);
  }

  onUpdateName(event: any) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}

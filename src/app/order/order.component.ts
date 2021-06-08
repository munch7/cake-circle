import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent {
  name="";
  location;
  
  chris = "";   
  
  submi(){
    this.chris = "christine",
    console.log("submitted")
  }
}

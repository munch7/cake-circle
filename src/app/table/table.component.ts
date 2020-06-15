import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  loadedFeature = 'order';
    
    constructor() { }

    ngOnInit() {
  }

}

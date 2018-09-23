import { Component, OnInit } from '@angular/core';
import { Task, Status } from '../task';

@Component({
  selector: 'app-newtask',
  templateUrl: './newtask.component.html',
  styleUrls: ['./newtask.component.css']
})

export class NewTaskComponent implements OnInit {
  Name: string;
  Description: string;
  Priority: number;
  Status: Status;
  Timespan: Date;
  
  constructor() { }

  ngOnInit() {
  }
}

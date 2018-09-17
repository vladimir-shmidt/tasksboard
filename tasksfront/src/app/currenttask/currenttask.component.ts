import { Component, OnInit } from '@angular/core';
import { Task, Status } from '../task';
@Component({
  selector: 'app-currenttask',
  templateUrl: './currenttask.component.html',
  styleUrls: ['./currenttask.component.css']
})

export class CurrentTaskComponent implements OnInit {
  task: Task;

  constructor() { 
  }

  ngOnInit() {
  }
}

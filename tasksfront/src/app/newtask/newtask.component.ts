import { Component, OnInit } from '@angular/core';
import { Task } from '../task';

@Component({
  selector: 'app-newtask',
  templateUrl: './newtask.component.html',
  styleUrls: ['./newtask.component.css']
})
export class NewTaskComponent implements OnInit {
  task: Task;
  
  constructor() { }

  ngOnInit() {
  }

}

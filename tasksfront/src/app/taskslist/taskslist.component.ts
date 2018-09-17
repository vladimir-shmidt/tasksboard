import { Component, OnInit } from '@angular/core';
import { Task } from '../task';

@Component({
  selector: 'app-taskslist',
  templateUrl: './taskslist.component.html',
  styleUrls: ['./taskslist.component.css']
})
export class TasksListComponent implements OnInit {
  tasks: Task[] = [];
  
  constructor() { }

  ngOnInit() {
  }

}

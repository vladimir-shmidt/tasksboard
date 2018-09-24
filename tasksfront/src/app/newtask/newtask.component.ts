import { Component, OnInit } from '@angular/core';
import { Task, Status } from '../task';
import { TasksDataService } from '../TasksDataService';

@Component({
  selector: 'app-newtask',
  templateUrl: './newtask.component.html',
  styleUrls: ['./newtask.component.css']
})

export class NewTaskComponent implements OnInit {
  Name: string;
  Description: string;
  Priority: number;
  Timespan: Date;
  
  constructor(private service: TasksDataService) { }

  ngOnInit() {
  }

  create() {
    let task = new Task();
    task.Name = this.Name;
    task.Description = this.Description;
    task.Priority = this.Priority;
    task.Timespan = this.Timespan;

    this.service.addTask(task).subscribe(task => console.log(task));
  }
}

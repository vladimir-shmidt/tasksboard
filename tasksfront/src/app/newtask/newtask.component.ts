import { Component, OnInit } from '@angular/core';
import { Task, Status } from '../task';
import { TasksDataService } from '../TasksDataService';
import { NgbTimeStruct } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-newtask',
  templateUrl: './newtask.component.html',
  styleUrls: ['./newtask.component.css']
})

export class NewTaskComponent implements OnInit {
  Name: string;
  Description: string;
  Priority: number;
  Date: Date = new Date();
  Time: NgbTimeStruct = {hour: 0, minute: 5, second: 0};
  Today: string;
  
  constructor(private service: TasksDataService) { }

  ngOnInit() {
    let today = new Date();
    this.Today = `${today.getFullYear()}-${today.getMonth() < 10 ? '0' + ( today.getMonth() + 1) : today.getMonth() + 1}-${today.getDate() < 10 ? '0' + today.getDate() : today.getDate()}`
  }

  create() {
    let task = new Task();
    task.Name = this.Name;
    task.Description = this.Description;
    task.Priority = this.Priority;
    task.Timespan = new Date(this.Date);
    task.Timespan.setHours(this.Time.hour);
    task.Timespan.setMinutes(this.Time.minute);
    task.Timespan.setSeconds(this.Time.second);

    this.service.addTask(task).subscribe(task => console.log(task));
  }
}

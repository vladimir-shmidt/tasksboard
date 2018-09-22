import { Component, OnInit } from '@angular/core';
import { Task, Status } from '../task';
import { TaskSelectedService } from '../TaskSelectedService';

@Component({
  selector: 'app-currenttask',
  templateUrl: './currenttask.component.html',
  styleUrls: ['./currenttask.component.css'],
})

export class CurrentTaskComponent implements OnInit {
  task: Task;

  constructor(private service: TaskSelectedService) { }

  ngOnInit() {
    this.service.currentTask.subscribe(task => {
      this.task = task;
    });
  }
}

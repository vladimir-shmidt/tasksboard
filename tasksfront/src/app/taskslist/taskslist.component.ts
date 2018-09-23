import { Component, OnInit } from '@angular/core';
import { Task } from '../task';
import { TaskSelectedService } from '../TaskSelectedService';
import { Router } from "@angular/router";

@Component({
  selector: 'app-taskslist',
  templateUrl: './taskslist.component.html',
  styleUrls: ['./taskslist.component.css']
})
export class TasksListComponent implements OnInit {
  tasks: Task[] = [];
  rows = [
    { Id: "1", Name: "1", Description: "One", Priority: 1, Timespan: Date.now(), Status: 'Active'},
    { Id: "2", Name: "2", Description: "Two", Priority: 2, Timespan: Date.now()},
    { Id: "3", Name: "3", Description: "Three", Priority: 1, Timespan: Date.now()},
  ];
  columns = [
    { prop: 'Name' },
    { prop: 'Priority' },
    { prop: 'Created', name: 'Added' },
    { prop: 'Timespan' },
    { prop: 'Status' }
  ];

  constructor(private router: Router, private service: TaskSelectedService){ }

  ngOnInit() {
  }

  onSelect({ selected }) {
    let task = selected[0];
    this.service.selectTask(task);
    this.router.navigate(['/tasks', task.Id]);
  }
}

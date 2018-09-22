import { Component, OnInit } from '@angular/core';
import { Task } from '../task';
import { TaskSelectedService } from '../TaskSelectedService';

@Component({
  selector: 'app-taskslist',
  templateUrl: './taskslist.component.html',
  styleUrls: ['./taskslist.component.css']
})
export class TasksListComponent implements OnInit {
  tasks: Task[] = [];
  rows = [
    { Name: "1", Description: "One", Priority: 1, Timespan: Date.now(), Status: 'Active'},
    { Name: "2", Description: "Two", Priority: 2, Timespan: Date.now()},
    { Name: "3", Description: "Three", Priority: 1, Timespan: Date.now()},
  ];
  columns = [
    { prop: 'Name' },
    { prop: 'Priority' },
    { prop: 'Created', name: 'Added' },
    { prop: 'Timespan' },
    { prop: 'Status' }
  ];

  constructor(private service: TaskSelectedService){ }

  ngOnInit() {
  }

  onSelect({ selected }) {
    this.service.selectTask(selected[0]);
  }
}

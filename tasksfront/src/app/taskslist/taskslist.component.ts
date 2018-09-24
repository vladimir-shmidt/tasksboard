import { Component, TemplateRef, ViewChild, OnInit } from '@angular/core';
import { Task } from '../task';
import { TaskSelectedService } from '../TaskSelectedService';
import { Router } from "@angular/router";
import { TasksDataService } from '../TasksDataService';

@Component({
  selector: 'app-taskslist',
  templateUrl: './taskslist.component.html',
  styleUrls: ['./taskslist.component.css']
})
export class TasksListComponent implements OnInit {
  @ViewChild('editTmpl') editTmpl: TemplateRef<any>;

  tasks: Task[] = [];
  rows = [];
  columns = [];

  constructor(private router: Router, private taskSelected: TaskSelectedService, private dataService: TasksDataService){ }

  ngOnInit() {
    this.columns = [{ prop: 'Name' },
      { prop: 'Priority' },
      { prop: 'Created', name: 'Added' },
      { prop: 'Timespan' },
      { prop: 'Status' },
      { name: 'Actions', prop: 'Status',  cellTemplate: this.editTmpl }
    ];
  }

  onSelect({ selected }) {
    let task = selected[0];
    this.taskSelected.selectTask(task);
    this.router.navigate(['/tasks', task.Id]);
  }

  onRefresh() {
    this.dataService.getTasks().subscribe(paged => {
      this.rows = paged.Data
    });
  }
}

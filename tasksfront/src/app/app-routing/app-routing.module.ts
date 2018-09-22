import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NewTaskComponent } from '../newtask/newtask.component';
import { CurrentTaskComponent } from '../currenttask/currenttask.component';
import { TasksListComponent } from '../taskslist/taskslist.component';
import { AppComponent } from '../app.component';

const routes: Routes = [
  { path: '', component: AppComponent, children: [
    { path: 'newtask', component: AppComponent },
    { path: 'task/:id', component: AppComponent },
    { path: 'tasks', component: AppComponent },
  ]}
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
})

export class AppRoutingModule { }

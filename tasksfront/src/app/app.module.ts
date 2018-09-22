import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TasksListComponent } from './taskslist/taskslist.component';
import { NewTaskComponent } from './newtask/newtask.component';
import { CurrentTaskComponent } from './currenttask/currenttask.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { FormsModule } from '@angular/forms';
import { TaskSelectedService } from './TaskSelectedService';

@NgModule({
  declarations: [
    AppComponent,
    TasksListComponent,
    NewTaskComponent,
    CurrentTaskComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    NgxDatatableModule,
  ],
  providers:[TaskSelectedService],
  bootstrap: [AppComponent]
})
export class AppModule {

}

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
import { AppRoutingModule } from './app-routing/app-routing.module';
import { MainpageComponent } from './mainpage/mainpage.component'
import { TasksDataService } from './TasksDataService';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    TasksListComponent,
    NewTaskComponent,
    CurrentTaskComponent,
    MainpageComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    NgxDatatableModule,
    AppRoutingModule,
    HttpClientModule,
    HttpModule,
  ],
  providers:[TaskSelectedService, TasksDataService],
  bootstrap: [AppComponent]
})
export class AppModule {

}

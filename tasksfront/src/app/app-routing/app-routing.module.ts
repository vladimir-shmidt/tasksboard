import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainpageComponent } from '../mainpage/mainpage.component';

const routes: Routes = [
  { path: '', redirectTo: 'tasks', pathMatch: 'full' },
  { path: 'newtask', component: MainpageComponent },
  { path: 'tasks', component: MainpageComponent },
  { path: 'tasks/:id', component: MainpageComponent },
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
})

export class AppRoutingModule { }

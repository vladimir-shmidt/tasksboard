import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { Task } from './task';

@Injectable({
    providedIn: 'root'    
})
export class TaskSelectedService {
    private messageSource = new ReplaySubject<Task>(1);
    currentTask = this.messageSource.asObservable();
    constructor() {}

    selectTask(task: Task) {
        this.messageSource.next(task);
    }
}


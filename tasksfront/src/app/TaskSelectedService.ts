import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Task } from './task';

@Injectable()
export class TaskSelectedService {
    private messageSource = new BehaviorSubject(new Task());
    currentTask = this.messageSource.asObservable();
    constructor() {}

    selectTask(task: Task) {
        this.messageSource.next(task);
    }
}


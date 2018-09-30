import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Task, PagedData } from './task';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()

export class TasksDataService {
    taskUrl: string;

    constructor(private http: HttpClient) {
        this.taskUrl = 'http://localhost:5000'
     }

    getTasks(): Observable<PagedData<Task>> {
        return this.http.get<PagedData<Task>>(`${this.taskUrl}/${"api/tasks"}/?page=${0}&size=${10}`)
        .pipe(
            tap((paged: PagedData<Task>) => console.log(`${paged.length}`)),
            catchError(this.handleError<PagedData<Task>>('getTasks'))
        );
            
    }

    addTask(task: Task) : Observable<Task> {
        return this.http.post(`${this.taskUrl}/${"api/tasks"}`, task)
            .pipe(
                tap((task: Task) => console.log(`added task w/ id=${task.Id}`)),
                catchError(this.handleError<Task>('addTask'))
            );
    }

    private handleError<T> (operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
            console.error(error);
            console.log(`${operation} failed: ${error.message}`);
            return of(result as T);
        };
    }
}
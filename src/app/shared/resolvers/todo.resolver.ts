import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { ITodo } from '../interfaces/todo.interface';
import { TodosApiService } from '../services/api/todos.api.service';

@Injectable({ providedIn: 'root' })
export class todoResolver implements Resolve<ITodo> {
  constructor(private todosApiService: TodosApiService) {}
  resolve(route: ActivatedRouteSnapshot) {
    return this.todosApiService.getTodoById(route.params['id']);
  }
}

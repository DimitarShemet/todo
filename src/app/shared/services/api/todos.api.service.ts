import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ITodo } from '../../interfaces/todo.interface';
import { ITodosResponse } from '../../interfaces/todos-response.interface';

@Injectable({
  providedIn: 'root',
})
export class TodosApiService {
  constructor(private http: HttpClient) {}

  getTodos(): Observable<ITodosResponse> {
    return this.http.get<ITodosResponse>('api/todo/');
  }

  deleteTodo(id: string): Observable<null> {
    return this.http.delete<null>(`api/todo/${id}`);
  }
  getTodoById(id: string): Observable<ITodo> {
    return this.http.get<ITodo>(`api/todo/${id}`);
  }

  createTodo(todo: ITodo): Observable<ITodo> {
    return this.http.post<ITodo>(`api/todo/`, todo);
  }

  editTodo(id: string, todo: ITodo): Observable<ITodo> {
    return this.http.put<ITodo>(`api/todo/${id}/`, todo);
  }
}

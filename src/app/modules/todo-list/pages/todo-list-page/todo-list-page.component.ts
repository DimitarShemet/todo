import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { ModulePath } from 'src/app/shared/enums/routing-path.enums';
import {
  deleteTodo,
  loadTodos,
  resetError,
} from 'src/app/store/actions/todos-actions';
import { errorSelector } from 'src/app/store/selectors/error-selector';
import { todosSelector } from 'src/app/store/selectors/todos-selector';

@Component({
  selector: 'app-todo-list-page',
  templateUrl: './todo-list-page.component.html',
  styleUrls: ['./todo-list-page.component.scss'],
})
export class TodoListPageComponent {
  tableHeaders: string[] = ['title', 'status', 'delete todo'];
  $todos = this.store.select(todosSelector);
  $error = this.store.select(errorSelector);
  todoCreatePage = ModulePath.CoreFullPath + ModulePath.TodoCreateFullPath;
  isSpinning = false;

  constructor(private store: Store, private router: Router) {}

  ngOnInit() {
    this.store.dispatch(loadTodos());
  }

  handleOk(): void {
    this.store.dispatch(resetError());
  }

  handleCancel(): void {
    this.store.dispatch(resetError());
  }

  deleteTodo(id: string) {
    event.stopPropagation();
    this.store.dispatch(deleteTodo({ id }));
  }

  openEditTodoPage(id: string) {
    this.isSpinning = true;
    this.router.navigate([
      ModulePath.CoreFullPath + ModulePath.TodoEditFullPath + id,
    ]);
  }
}

import { createAction, props } from '@ngrx/store';
import { ITodo } from 'src/app/shared/interfaces/todo.interface';

export const loadTodos = createAction('[Todo List Page] Load Todos');
export const todosLoadedSuccess = createAction(
  '[Todo List Page] Todos Loaded Success',
  props<{ todos: ITodo[] }>()
);
export const todosLoadedError = createAction(
  '[Todo List Page] Todos Loaded Error',
  props<{ error: string }>()
);
export const deleteTodo = createAction(
  '[Todo List Page] Delete Todo',
  props<{ id: string }>()
);
export const todoDeletedSuccess = createAction(
  '[Todo List Page] Todo Deleted Success',
  props<{ id: string }>()
);
export const todoDeletedError = createAction(
  '[Todo List Page] Todo Deleted Error',
  props<{ error: string }>()
);

export const createTodo = createAction(
  '[Todo Create Page] Create Todo',
  props<{ todo: ITodo }>()
);
export const todoCreatedSuccess = createAction(
  '[Todo Create Page] Todo Created Success',
  props<{ todo: ITodo }>()
);
export const todoCreatedError = createAction(
  '[Todo Create Page] Todo Created Error',
  props<{ error: string }>()
);

export const editTodo = createAction(
  '[Todo Edit Page] Edit Todo',
  props<{ id: string; todo: ITodo }>()
);

export const todoEditedSuccess = createAction(
  '[Todo Edit Page]  Todo Edited Success',
  props<{ id: string; todo: ITodo }>()
);

export const todoEditedError = createAction(
  '[Todo Edit Page]  Todo Edited Error',
  props<{ error: string }>()
);
export const resetError = createAction('[Todo]  Reset error');

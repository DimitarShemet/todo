import { createReducer, on } from '@ngrx/store';
import { ITodosState } from 'src/app/shared/interfaces/todos-state.interface';
import * as AuthActions from '../actions/auth-actions';
import * as TodosActions from '../actions/todos-actions';

const initialState: ITodosState = {
  todos: [],
  error: null,
};

export const todosReducer = createReducer(
  initialState,
  on(TodosActions.todosLoadedSuccess, (state, { todos }) => ({
    ...state,
    todos: todos,
  })),

  on(TodosActions.todoDeletedSuccess, (state, { id }) => ({
    ...state,
    todos: state.todos.filter((elem) => elem.id !== id),
  })),

  on(TodosActions.todoCreatedSuccess, (state, { todo }) => ({
    ...state,
    todos: [...state.todos, todo],
  })),

  on(TodosActions.todoEditedSuccess, (state, { id, todo }) => ({
    ...state,
    todos: state.todos.map((elem) => (elem.id === id ? { ...todo } : elem)),
  })),

  on(TodosActions.todoCreatedError, (state, { error }) => ({
    ...state,
    error: error,
  })),

  on(TodosActions.todosLoadedError, (state, { error }) => ({
    ...state,
    error: error,
  })),

  on(TodosActions.todoDeletedError, (state, { error }) => ({
    ...state,
    error: error,
  })),

  on(TodosActions.todoEditedError, (state, { error }) => ({
    ...state,
    error: error,
  })),

  on(TodosActions.resetError, (state) => ({
    ...state,
    error: null,
  })),
  on(AuthActions.logInError, (state, { error }) => ({
    ...state,
    error: error,
  }))
);

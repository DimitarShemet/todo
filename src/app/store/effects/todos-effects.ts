import { inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, exhaustMap, map, of } from 'rxjs';
import * as TodosActions from '../actions/todos-actions';
import { TodosApiService } from 'src/app/shared/services/api/todos.api.service';

export const loadTodos = createEffect(
  (actions$ = inject(Actions), todosApiService = inject(TodosApiService)) => {
    return actions$.pipe(
      ofType(TodosActions.loadTodos),
      exhaustMap((action) =>
        todosApiService.getTodos().pipe(
          map((todosResponsePayload) => {
            console.log(todosResponsePayload);
            return TodosActions.todosLoadedSuccess({
              todos: todosResponsePayload.results,
            });
          }),
          catchError((error) =>
            of(TodosActions.todosLoadedError({ error: error.message }))
          )
        )
      )
    );
  },
  { functional: true }
);

export const deleteTodo = createEffect(
  (actions$ = inject(Actions), todosApiService = inject(TodosApiService)) => {
    return actions$.pipe(
      ofType(TodosActions.deleteTodo),
      exhaustMap((action) =>
        todosApiService.deleteTodo(action.id).pipe(
          map((todoResponsePayload) => {
            console.log(todoResponsePayload);
            return TodosActions.todoDeletedSuccess({
              id: action.id,
            });
          }),
          catchError((error) =>
            of(TodosActions.todoDeletedError({ error: error.message }))
          )
        )
      )
    );
  },
  { functional: true }
);

export const createTodo = createEffect(
  (actions$ = inject(Actions), todosApiService = inject(TodosApiService)) => {
    return actions$.pipe(
      ofType(TodosActions.createTodo),
      exhaustMap((action) =>
        todosApiService.createTodo(action.todo).pipe(
          map((todoResponsePayload) => {
            console.log(todoResponsePayload);
            return TodosActions.todoCreatedSuccess({
              todo: todoResponsePayload,
            });
          }),
          catchError((error) => {
            console.log(error);
            return of(TodosActions.todoCreatedError({ error: error.message }));
          })
        )
      )
    );
  },
  { functional: true }
);

export const editTodo = createEffect(
  (actions$ = inject(Actions), todosApiService = inject(TodosApiService)) => {
    return actions$.pipe(
      ofType(TodosActions.editTodo),
      exhaustMap((action) =>
        todosApiService.editTodo(action.id, action.todo).pipe(
          map((todoResponsePayload) => {
            console.log(todoResponsePayload);
            return TodosActions.todoEditedSuccess({
              id: todoResponsePayload.id,
              todo: todoResponsePayload,
            });
          }),
          catchError((error) =>
            of(TodosActions.todoEditedError({ error: error.message }))
          )
        )
      )
    );
  },
  { functional: true }
);

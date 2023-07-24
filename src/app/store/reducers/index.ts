import { ActionReducerMap } from '@ngrx/store';
import { ITodosState } from 'src/app/shared/interfaces/todos-state.interface';
import { todosReducer } from './todos.reducer';

export interface AppState {
  todos: ITodosState;
}

export const reducers: ActionReducerMap<AppState, any> = {
  todos: todosReducer,
};

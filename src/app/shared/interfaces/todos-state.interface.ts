import { ITodo } from './todo.interface';

export interface ITodosState {
  todos: ITodo[];
  error: string | null;
}

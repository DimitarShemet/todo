import { ITodo } from './todo.interface';

export interface ITodosResponse {
  count: number;
  results: ITodo[];
}

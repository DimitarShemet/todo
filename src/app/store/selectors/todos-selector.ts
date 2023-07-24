import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ITodosState } from 'src/app/shared/interfaces/todos-state.interface';

export const featureSelecetor = createFeatureSelector<ITodosState>('todos');
export const todosSelector = createSelector(
  featureSelecetor,
  (state) => state.todos
);

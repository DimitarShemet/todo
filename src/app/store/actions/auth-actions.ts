import { createAction, props } from '@ngrx/store';
import { ILogInData } from 'src/app/shared/interfaces/login-data.interface';
import { ITodo } from 'src/app/shared/interfaces/todo.interface';

export const logIn = createAction(
  '[Auth Page] Login',
  props<{ data: ILogInData }>()
);
export const logInSuccess = createAction('[Auth Page] Login Success');
export const logInError = createAction(
  '[Auth Page] Login Error',
  props<{ error: string }>()
);

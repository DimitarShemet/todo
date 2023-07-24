import { inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, exhaustMap, map, of } from 'rxjs';
import * as AuthActions from '../actions/auth-actions';
import { AuthApiService } from 'src/app/shared/services/api/auth.api.service';
import { AuthService } from 'src/app/shared/services/auth.service';

export const logIn = createEffect(
  (
    actions$ = inject(Actions),
    authApiService = inject(AuthApiService),
    authService = inject(AuthService)
  ) => {
    return actions$.pipe(
      ofType(AuthActions.logIn),
      exhaustMap((action) =>
        authApiService.getToken(action.data).pipe(
          map((authResponsePayload) => {
            console.log(authResponsePayload);
            authService.logIn(authResponsePayload);
            return AuthActions.logInSuccess();
          }),
          catchError((error) =>
            of(AuthActions.logInError({ error: error.message }))
          )
        )
      )
    );
  },
  { functional: true }
);

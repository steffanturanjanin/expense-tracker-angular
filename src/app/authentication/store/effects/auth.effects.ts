import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { map, switchMap, catchError, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';


import { AuthService } from '../../../core/services/auth/auth.service';
import {
  AuthActions,
  AuthActionTypes,
  GetAuthenticatedUserFailureAction,
  GetAuthenticatedUserRequestAction,
  GetAuthenticatedUserSuccessAction
} from '../actions/auth.actions';
import {
  SignUpRequestAction, SignUpSuccessAction, SignUpFailureAction,
  LoginRequestAction, LoginSuccessAction, LoginFailureAction } from '../actions/auth.actions';

@Injectable()
export class AuthEffects {
  constructor(
    private actions: Actions,
    private authService: AuthService,
    private router: Router,
  ) {}

  @Effect()
  SignUpRequestAction: Observable<any> = this.actions.pipe(
    ofType(AuthActionTypes.SIGNUP_REQUEST),
    map((action: SignUpRequestAction ) => action.payload),
    switchMap(payload => {
      return this.authService.signUp(payload.email, payload.password).pipe(
        map((response) => {
          return new SignUpSuccessAction({token: response.body.token, email: payload.email});
        }),
        catchError((error) => {
          console.log(error);
          return of(new SignUpFailureAction({ error }));
        })
      );
    }
  ));

  @Effect()
  loginRequestAction$ = this.actions.pipe(
    ofType<AuthActions>(AuthActionTypes.LOGIN_REQUEST),
    map((action: LoginRequestAction) => action.payload),
    switchMap(payload => {
      console.log(payload);
      return this.authService.logIn(payload.email, payload.password).pipe(
        map((response) => {
          return new LoginSuccessAction({token: response.token, email: response.user.email});
        }),
        catchError((error) => {
          console.log(error);
          return of(new LoginFailureAction({ error }));
        })
      );
    })
  );

  @Effect({ dispatch: false })
  loginSuccessAction$ = this.actions.pipe(
    ofType<AuthActions>(AuthActionTypes.LOGIN_SUCCESS, AuthActionTypes.SIGNUP_SUCCESS),
    map((action) => action.payload),
    tap((payload) => {
      localStorage.setItem('token', payload.token);
      this.router.navigateByUrl('/expenses');
    })
  );

  @Effect()
  getAuthenticatedUserRequestAction$ = this.actions.pipe(
    ofType<AuthActions>(AuthActionTypes.GET_AUTHENTICATED_USER_REQUEST),
    map((action: GetAuthenticatedUserRequestAction) => action.payload),
    switchMap((payload) => {
      return this.authService.getAuthenticatedUser().pipe(
        map((response) => {
          return new GetAuthenticatedUserSuccessAction({token: payload.token, email: response.email});
        }),
        catchError((error) => {
          return of(new GetAuthenticatedUserFailureAction( {error}));
        })
      );
    })
  );
}




import { Action } from '@ngrx/store';

export enum AuthActionTypes {
  SIGNUP_REQUEST = '[Auth] Signup Request',
  SIGNUP_SUCCESS = '[Auth] Signup Success',
  SIGNUP_FAILURE = '[Auth] Signup Failure',

  LOGIN_REQUEST = '[Auth] Login Request',
  LOGIN_SUCCESS = '[Auth] Login Success',
  LOGIN_FAILURE = '[Auth] Login Failure',

  GET_AUTHENTICATED_USER_REQUEST = '[Auth] Get Authenticated User Request',
  GET_AUTHENTICATED_USER_SUCCESS = '[Auth] Get Authenticated User Success',
  GET_AUTHENTICATED_USER_FAILURE = '[Auth] Get Authenticated User Failure',

  LOGOUT_REQUEST = '[Auth] Logout Request',
  LOGOUT_SUCCESS = '[Auth] Logout Success',
  LOGOUT_FAILURE = '[Auth] Logout Failure',
}

export class SignUpRequestAction implements Action {
  readonly type = AuthActionTypes.SIGNUP_REQUEST;
  constructor(public payload: any) {}
}

export class SignUpSuccessAction implements Action {
  readonly type = AuthActionTypes.SIGNUP_SUCCESS;
  constructor(public payload: any) {}
}

export class SignUpFailureAction implements Action {
  readonly type = AuthActionTypes.SIGNUP_FAILURE;
  constructor(public payload: any) {}
}

export class LoginRequestAction implements Action {
  readonly type = AuthActionTypes.LOGIN_REQUEST;
  constructor(public payload: any) {}
}

export class LoginSuccessAction implements Action {
  readonly type = AuthActionTypes.LOGIN_SUCCESS;
  constructor(public payload: any) {}
}

export class LoginFailureAction implements Action {
  readonly type = AuthActionTypes.LOGIN_FAILURE;
  constructor(public payload: any) {}
}

export class GetAuthenticatedUserRequestAction implements Action {
  readonly type = AuthActionTypes.GET_AUTHENTICATED_USER_REQUEST;
  constructor(public payload: any) {}
}

export class GetAuthenticatedUserSuccessAction implements Action {
  readonly type = AuthActionTypes.GET_AUTHENTICATED_USER_SUCCESS;
  constructor(public payload: any) {}
}

export class GetAuthenticatedUserFailureAction implements Action {
  readonly type = AuthActionTypes.GET_AUTHENTICATED_USER_FAILURE;
  constructor(public payload: any) {}
}

export class LogoutRequestAction implements Action {
  readonly type = AuthActionTypes.LOGOUT_REQUEST;
  constructor() {}
}

export class LogoutSuccessAction implements Action {
  readonly type = AuthActionTypes.LOGOUT_SUCCESS;
  constructor() {}
}

export class LogoutFailureAction implements Action {
  readonly type = AuthActionTypes.LOGOUT_FAILURE;
  constructor(public payload: any) {}
}

export type AuthActions =
  | SignUpRequestAction
  | SignUpSuccessAction
  | SignUpFailureAction
  | LoginRequestAction
  | LoginSuccessAction
  | LoginFailureAction
  | GetAuthenticatedUserRequestAction
  | GetAuthenticatedUserSuccessAction
  | GetAuthenticatedUserFailureAction
  | LogoutRequestAction
  | LogoutSuccessAction
  | LogoutFailureAction;

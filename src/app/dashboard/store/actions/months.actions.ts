import {Action} from '@ngrx/store';

export enum MonthsActionTypes {
  GET_MONTH_LIST_REQUEST = '[Dashboard] Get Month List Request',
  GET_MONTH_LIST_SUCCESS = '[Dashboard] Get Month List Success',
  GET_MONTH_LIST_FAILURE = '[Dashboard] Get Month List Failure',
}

export class GetMonthListRequestAction implements Action {
  readonly type = MonthsActionTypes.GET_MONTH_LIST_REQUEST;
  constructor() {}
}

export class GetMonthListSuccessAction implements Action {
  readonly type = MonthsActionTypes.GET_MONTH_LIST_SUCCESS;
  constructor(public payload: any) {}
}

export class GetMonthListFailureAction implements Action {
  readonly type = MonthsActionTypes.GET_MONTH_LIST_FAILURE;
  constructor(public payload: any) {}
}

export type MonthsActions =
  | GetMonthListRequestAction
  | GetMonthListSuccessAction
  | GetMonthListFailureAction;

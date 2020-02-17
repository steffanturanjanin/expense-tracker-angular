import {Action} from '@ngrx/store';

export enum ReportsActionTypes {
  GET_ALL_REPORTS_REQUEST = '[Dashboard] Get All Reports Request',
  GET_ALL_REPORTS_SUCCESS = '[Dashboard] Get All Reports Success',
  GET_ALL_REPORTS_FAILURE = '[Dashboard] Get All Reports Failure',

  GET_MONTHLY_REPORT_REQUEST = '[Dashboard] Get Monthly Report Request',
  GET_MONTHLY_REPORT_SUCCESS = '[Dashboard] Get Monthly Report Success',
  GET_MONTHLY_REPORT_FAILURE = '[Dashboard] Get Monthly Report Failure',
}

export class GetAllReportsRequestAction implements Action {
  readonly type =  ReportsActionTypes.GET_ALL_REPORTS_REQUEST;
  constructor() {}
}

export class GetAllReportsSuccessAction implements Action {
  readonly type =  ReportsActionTypes.GET_ALL_REPORTS_SUCCESS;
  constructor(public payload: any) {}
}

export class GetAllReportsFailureAction implements Action {
  readonly type =  ReportsActionTypes.GET_ALL_REPORTS_FAILURE;
  constructor(public payload: any) {}
}

export class GetMonthlyReportRequestAction implements Action {
  readonly type =  ReportsActionTypes.GET_MONTHLY_REPORT_REQUEST;
  constructor(public payload: any) {}
}

export class GetMonthlyReportSuccessAction implements Action {
  readonly type =  ReportsActionTypes.GET_MONTHLY_REPORT_SUCCESS;
  constructor(public payload: any) {}
}

export class GetMonthlyReportFailureAction implements Action {
  readonly type =  ReportsActionTypes.GET_MONTHLY_REPORT_FAILURE;
  constructor(public payload: any) {}
}

export type ReportsActions =
  | GetAllReportsRequestAction
  | GetAllReportsSuccessAction
  | GetAllReportsFailureAction
  | GetMonthlyReportRequestAction
  | GetMonthlyReportSuccessAction
  | GetMonthlyReportFailureAction;


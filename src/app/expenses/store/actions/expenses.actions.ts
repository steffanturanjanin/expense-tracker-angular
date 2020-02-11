import { Action } from '@ngrx/store';

export enum ExpensesActionTypes {
  CREATE_EXPENSE_REQUEST = '[Expenses] Create Expense Request',
  CREATE_EXPENSE_SUCCESS = '[Expenses] Create Expense Success',
  CREATE_EXPENSE_FAILURE = '[Expenses] Create Expense Failure',

  GET_EXPENSES_REQUEST = '[Expenses] Get Expenses Request',
  GET_EXPENSES_SUCCESS = '[Expenses] Get Expenses Success',
  GET_EXPENSES_FAILURE = '[Expenses] Get Expenses Failure',

  DELETE_EXPENSE_REQUEST = '[Expenses] Delete Expense Request',
  DELETE_EXPENSE_SUCCESS = '[Expenses] Delete Expense Success',
  DELETE_EXPENSE_FAILURE = '[Expenses] Delete Expense Failure',
}

export class CreateExpenseRequestAction implements Action {
  readonly type = ExpensesActionTypes.CREATE_EXPENSE_REQUEST;
  constructor(public payload: any) {}
}

export class CreateExpenseSuccessAction implements Action {
  readonly type = ExpensesActionTypes.CREATE_EXPENSE_SUCCESS;
  constructor(public payload: any) {}
}

export class CreateExpenseFailureAction implements Action {
  readonly type = ExpensesActionTypes.CREATE_EXPENSE_FAILURE;
  constructor(public payload: any) {}
}

export class GetExpensesRequestAction implements Action {
  readonly type = ExpensesActionTypes.GET_EXPENSES_REQUEST;
  constructor(public payload: any) {}
}

export class GetExpensesSuccessAction implements Action {
  readonly type = ExpensesActionTypes.GET_EXPENSES_SUCCESS;
  constructor(public payload: any) {}
}

export class GetExpensesFailureAction implements Action {
  readonly type = ExpensesActionTypes.GET_EXPENSES_FAILURE;
  constructor(public payload: any) {}
}

export class DeleteExpensesRequestAction implements Action {
  readonly type = ExpensesActionTypes.DELETE_EXPENSE_REQUEST;
  constructor(public payload: any) {}
}

export class DeleteExpensesSuccessAction implements Action {
  readonly type = ExpensesActionTypes.DELETE_EXPENSE_SUCCESS;
  constructor(public payload: any) {}
}

export class DeleteExpensesFailureAction implements Action {
  readonly type = ExpensesActionTypes.DELETE_EXPENSE_FAILURE;
  constructor(public payload: any) {}
}

export type ExpensesActions =
  | CreateExpenseRequestAction
  | CreateExpenseSuccessAction
  | CreateExpenseFailureAction
  | GetExpensesRequestAction
  | GetExpensesSuccessAction
  | GetExpensesFailureAction
  | DeleteExpensesRequestAction
  | DeleteExpensesSuccessAction
  | DeleteExpensesFailureAction;

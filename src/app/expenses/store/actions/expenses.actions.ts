import { Action } from '@ngrx/store';

export enum ExpensesActionTypes {
  CREATE_EXPENSE_REQUEST = '[Expenses] Create Expense Request',
  CREATE_EXPENSE_SUCCESS = '[Expenses] Create Expense Success',
  CREATE_EXPENSE_FAILURE = '[Expenses] Create Expense Failure',
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

export type ExpensesActions =
  | CreateExpenseRequestAction
  | CreateExpenseSuccessAction
  | CreateExpenseFailureAction;

import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { ExpensesService } from '../../../core/services/expenses/expenses.service';
import { Observable, of } from 'rxjs';
import { catchError, map, pluck, switchMap } from 'rxjs/operators';
import {
  CreateExpenseFailureAction,
  CreateExpenseRequestAction,
  CreateExpenseSuccessAction,
  DeleteExpensesFailureAction,
  DeleteExpensesRequestAction,
  DeleteExpensesSuccessAction,
  ExpensesActions,
  ExpensesActionTypes, GetAllExpensesFailureAction, GetAllExpensesSuccessAction,
  GetExpensesByMonthFailureAction,
  GetExpensesByMonthSuccessAction
} from '../actions/expenses.actions';

@Injectable()
export class ExpensesEffects {
  constructor(private actions: Actions, private expensesService: ExpensesService) {}

  @Effect()
  createExpenseRequestAction$: Observable<any> = this.actions.pipe(
    ofType<CreateExpenseRequestAction>(ExpensesActionTypes.CREATE_EXPENSE_REQUEST),
    map((action: CreateExpenseRequestAction) => action.payload),
    switchMap(expense => {
      return this.expensesService.createExpense(expense).pipe(
        map((response) => {
          return new CreateExpenseSuccessAction({ expense: response });
        }),
        catchError((error) => {
          console.log(error);
          return of(new CreateExpenseFailureAction({ error }));
        })
      );
    }),
  );

  @Effect()
  getExpensesRequestAction$: Observable<any> = this.actions.pipe(
    ofType<ExpensesActions>(ExpensesActionTypes.GET_EXPENSES_BY_MONTH_REQUEST, ExpensesActionTypes.GET_ALL_EXPENSES_REQUEST),
    switchMap((action: ExpensesActions) => {
      switch (action.type) {
        case ExpensesActionTypes.GET_EXPENSES_BY_MONTH_REQUEST: {
          return this.expensesService.getExpensesByMonth(action.payload.year, action.payload.month).pipe(
            map((response) => {
              return new GetExpensesByMonthSuccessAction({ expenses: response });
            }),
            catchError((error) => {
              return of(new GetExpensesByMonthFailureAction({ error }));
            })
          );
        }
        case ExpensesActionTypes.GET_ALL_EXPENSES_REQUEST: {
          return this.expensesService.getAllExpenses().pipe(
            map((response) => {
              return new GetAllExpensesSuccessAction({ expenses: response });
            }),
            catchError((error) => {
              return of(new GetAllExpensesFailureAction({ error }));
            })
          );
        }
      }
    })
  );

  @Effect()
  deleteExpenseRequestAction$: Observable<any> = this.actions.pipe(
    ofType<DeleteExpensesRequestAction>(ExpensesActionTypes.DELETE_EXPENSE_REQUEST),
    pluck('payload'),
    switchMap((payload) => {
      return this.expensesService.deleteExpense(payload.id).pipe(
        map((response) => {
          return new DeleteExpensesSuccessAction({ expense: response });
        }),
        catchError((error) => {
          return of(new DeleteExpensesFailureAction({ error }));
        }));
    })
  );
}

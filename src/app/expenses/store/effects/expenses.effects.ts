import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {ExpensesService} from '../../../core/services/expenses/expenses.service';
import {Observable, of} from 'rxjs';
import {
  CreateExpenseFailureAction,
  CreateExpenseRequestAction,
  CreateExpenseSuccessAction,
  ExpensesActions,
  ExpensesActionTypes, GetExpensesFailureAction, GetExpensesSuccessAction
} from '../actions/expenses.actions';
import {catchError, map, switchMap} from 'rxjs/operators';

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
    ofType<ExpensesActions>(ExpensesActionTypes.GET_EXPENSES_REQUEST),
    switchMap((action: ExpensesActions) => {
      if (action.type === ExpensesActionTypes.GET_EXPENSES_REQUEST) {
        return this.expensesService.getExpensesForMonth(action.payload.year, action.payload.month).pipe(
          map((response) => {
            return new GetExpensesSuccessAction({ expenses: response });
          }),
          catchError((error) => {
            return of(new GetExpensesFailureAction({ error }));
          })
        );
      }
    })
  );
}

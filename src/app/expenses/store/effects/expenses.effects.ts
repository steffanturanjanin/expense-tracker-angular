import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {ExpensesService} from '../../../core/services/expenses/expenses.service';
import {Observable, of} from 'rxjs';
import {Expense} from '../../../shared/models/expense/expense';
import {
  CreateExpenseFailureAction,
  CreateExpenseRequestAction,
  CreateExpenseSuccessAction,
  ExpensesActions,
  ExpensesActionTypes
} from '../actions/expenses.actions';
import {catchError, map, switchMap} from 'rxjs/operators';

@Injectable()
export class ExpensesEffects {
  constructor(private actions: Actions, private expensesService: ExpensesService) {}

  @Effect()
  createExpenseRequestAction$: Observable<any> = this.actions.pipe(
    ofType<ExpensesActions>(ExpensesActionTypes.CREATE_EXPENSE_REQUEST),
    map((action: CreateExpenseRequestAction) => action.payload),
    switchMap(expense => {
      return this.expensesService.createExpense(expense).pipe(
        map((response) => {
          return new CreateExpenseSuccessAction({ expense: response });
        })
      );
    }),
    catchError((error) => {
      return of(new CreateExpenseFailureAction({ error }));
    })
  );
}

import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';

import { ReportsService } from '../../../core/services/reports/reports.service';

import { Observable, of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';

import { GetMonthListFailureAction, GetMonthListSuccessAction, MonthsActions, MonthsActionTypes } from '../actions/months.actions';

@Injectable()
export class MonthsEffects {
  constructor(private actions: Actions, private reportService: ReportsService) {}

  @Effect()
  getMonthsListRequestAction$: Observable<any> = this.actions.pipe(
    ofType<MonthsActions>(MonthsActionTypes.GET_MONTH_LIST_REQUEST),
    switchMap(() => {
      return this.reportService.getMonths().pipe(
        map((response) => {
          return new GetMonthListSuccessAction( {months: response});
        }),
        catchError((error) => {
          return of(new GetMonthListFailureAction({ error }));
        })
      );
    })
  );
}

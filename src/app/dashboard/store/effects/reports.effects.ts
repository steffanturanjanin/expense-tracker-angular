import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {ReportsService} from '../../../core/services/reports/reports.service';
import {Observable, of} from 'rxjs';
import {
  GetAllReportsFailureAction,
  GetAllReportsSuccessAction, GetMonthlyReportFailureAction,
  GetMonthlyReportSuccessAction,
  ReportsActions,
  ReportsActionTypes
} from '../actions/reports.actions';
import {catchError, map, switchMap} from 'rxjs/operators';

@Injectable()
export class ReportsEffects {
  constructor(private actions: Actions, private reportsService: ReportsService) {}

  @Effect()
  getReportsRequestAction$: Observable<any> = this.actions.pipe(
    ofType<ReportsActions>(ReportsActionTypes.GET_ALL_REPORTS_REQUEST, ReportsActionTypes.GET_MONTHLY_REPORT_REQUEST),
    switchMap((action: ReportsActions) => {
      switch (action.type) {
        case ReportsActionTypes.GET_ALL_REPORTS_REQUEST: {
          return this.reportsService.getAllReports().pipe(
            map((response) => {
              return new GetAllReportsSuccessAction({ report: response });
            }),
            catchError((error) => {
              return of(new GetAllReportsFailureAction({ error }));
            })
          );
        }
        case ReportsActionTypes.GET_MONTHLY_REPORT_REQUEST: {
          return this.reportsService.getMonthlyReport(action.payload.year, action.payload.month).pipe(
            map((response) => {
              return new GetMonthlyReportSuccessAction({ report: response });
            }),
            catchError((error) => {
              return of(new GetMonthlyReportFailureAction({ error }));
            })
          );
        }
      }
    })
  );
}

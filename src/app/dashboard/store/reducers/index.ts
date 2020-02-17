import * as report from './reports.reducers';
import * as months from './months.reducer';
import {createFeatureSelector, createSelector} from '@ngrx/store';

export interface DashboardState {
  report: report.State;
  months: months.State;
}

export const reducers = {
  report: report.reducer,
  months: months.reducer
};

export const selectDashboardFeatureState = createFeatureSelector<DashboardState>('dashboardFeature');

export const selectReportsState = createSelector(
  selectDashboardFeatureState,
  (state: DashboardState) => state.report
);

export const selectMonthsState = createSelector(
  selectDashboardFeatureState,
  (state: DashboardState) => state.months
);

export const selectReport = createSelector(
  selectReportsState,
  report.getReport
);

export const selectReportType = createSelector(
  selectReportsState,
  report.getReportType
);

export const selectReportRequesting = createSelector(
  selectReportsState,
  report.getReportRequesting
);

export const selectReportError = createSelector(
  selectReportsState,
  report.getReportError
);

export const selectMonths = createSelector(
  selectMonthsState,
  months.getMonths
);

export const selectMonthsRequesting = createSelector(
  selectMonthsState,
  months.getMonthsRequesting
);

export const selectMonthsError = createSelector(
  selectMonthsState,
  months.getMonthsError
);

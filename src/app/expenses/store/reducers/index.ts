import * as expenses from './expenses.reducers';
import {createFeatureSelector, createSelector} from '@ngrx/store';

export interface ExpensesState {
  expenses: expenses.State;
}

export const reducers = {
  expenses: expenses.reducer
};

export const selectExpensesFeatureState = createFeatureSelector<ExpensesState>('expensesFeature');

export const selectExpensesState = createSelector(
  selectExpensesFeatureState,
  (state: ExpensesState) => state.expenses
);

export const selectExpensesRequesting = createSelector(
  selectExpensesState,
  expenses.getExpensesRequesting
);

export const selectExpensesError = createSelector(
  selectExpensesState,
  expenses.getExpensesError
);

export const selectExpensesIds = createSelector(
  selectExpensesState,
  expenses.selectExpensesIds
);

export const selectExpensesEntities = createSelector(
  selectExpensesState,
  expenses.selectExpensesEntities
);

export const selectExpensesAll = createSelector(
  selectExpensesState,
  expenses.selectExpensesAll
);

export const selectExpensesTotal = createSelector(
  selectExpensesState,
  expenses.selectExpensesTotal
);

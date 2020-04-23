import * as expenses from './expenses.reducers';
import * as category from './category.reducers';
import {createFeatureSelector, createSelector} from '@ngrx/store';

export interface ExpensesState {
  expenses: expenses.State;
  category: category.State;
}

export const reducers = {
  expenses: expenses.reducer,
  category: category.reducer
};

export const selectExpensesFeatureState = createFeatureSelector<ExpensesState>('expensesFeature');

export const selectExpensesState = createSelector(
  selectExpensesFeatureState,
  (state: ExpensesState) => state.expenses
);

export const selectCategoryState = createSelector(
  selectExpensesFeatureState,
  (state: ExpensesState) => state.category
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

export const selectCategory = createSelector(
  selectCategoryState,
  category.selectCategory
);

export const selectCategoryRequesting = createSelector(
  selectCategoryState,
  category.selectCategoryRequesting
);

export const selectCategoryError = createSelector(
  selectCategoryState,
  category.selectCategoryError
);

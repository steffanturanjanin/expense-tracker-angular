import * as categories from './categories.reducers';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export interface CategoriesState {
  categories: categories.State;
}

export const reducers = {
  categories: categories.reducer,
};

export const selectCategoriesFeatureState = createFeatureSelector<CategoriesState>('categoriesFeature');

export const selectCategoriesState = createSelector(
  selectCategoriesFeatureState,
  (state: CategoriesState) => state.categories
);

export const selectCategoriesRequesting = createSelector(
  selectCategoriesState,
  categories.getCategoriesRequesting
);

export const selectCategoriesError = createSelector(
  selectCategoriesState,
  categories.getCategoriesError
);

export const selectCategoriesIds = createSelector(
  selectCategoriesState,
  categories.selectCategoriesIds
);

export const selectCategoriesEntities = createSelector(
  selectCategoriesState,
  categories.selectCategoriesEntities
);

export const selectAllCategories = createSelector(
  selectCategoriesState,
  categories.selectAllCategories
);

export const selectCategoriesTotal = createSelector(
  selectCategoriesState,
  categories.selectCategoriesTotal
);

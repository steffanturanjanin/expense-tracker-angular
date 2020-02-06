import {createEntityAdapter, EntityAdapter, EntityState} from '@ngrx/entity';
import {Category} from '../../../shared/models/category/category';
import {CategoriesActions, CategoriesActionTypes} from '../actions/categories.actions';

export interface State extends EntityState<Category> {
  requesting: boolean;
  error: object | null;
}

export const adapter: EntityAdapter<Category> = createEntityAdapter<Category>();

export const initialState: State = adapter.getInitialState({
  requesting: false,
  error: null
});

export function reducer(state: State = initialState, action: CategoriesActions) {
  switch (action.type) {
    case CategoriesActionTypes.CREATE_CATEGORY_REQUEST: {
      return {
        ...state,
        requesting: true,
        error: null
      };
    }
    case CategoriesActionTypes.CREATE_CATEGORY_SUCCESS: {
      console.log('Success!!!');
      return adapter.addOne(action.payload.category,
        { ...state, requesting: false, error: null }
        );
    }
    case CategoriesActionTypes.CREATE_CATEGORY_FAILURE: {
      return {
        ...state,
        requesting: false,
        error: action.payload.error
      };
    }
    case CategoriesActionTypes.GET_CATEGORIES_REQUEST: {
      return {
        ...state,
        requesting: true,
        error: false
      };
    }
    case CategoriesActionTypes.GET_CATEGORIES_SUCCESS: {
      return adapter.addAll(action.payload.categories,
        { ...state, requesting: false, error: null }
        );
    }
    case CategoriesActionTypes.GET_CATEGORIES_FAILURE: {
      return {
        ...state,
        requesting: false,
        error: action.payload.error
      };
    }
    case CategoriesActionTypes.DELETE_CATEGORY_REQUEST: {
      return {
        ...state,
        requesting: true,
        error: null
      };
    }
    case CategoriesActionTypes.DELETE_CATEGORY_SUCCESS: {
      return adapter.removeOne(action.payload.category.id,
          { ...state, requesting: false, error: null }
        );
    }
    case CategoriesActionTypes.DELETE_CATEGORY_FAILURE: {
      return {
        ...state,
        requesting: false,
        error: action.payload.error
      };
    }
    default:
      return state;
  }
}

export const getCategoriesRequesting = (state: State) => state.requesting;

export const getCategoriesError = (state: State) => state.error;

const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal
} = adapter.getSelectors();

export const selectCategoriesIds = selectIds;

export const selectCategoriesEntities = selectEntities;

export const selectAllCategories = selectAll;

export const selectCategoriesTotal = selectTotal;

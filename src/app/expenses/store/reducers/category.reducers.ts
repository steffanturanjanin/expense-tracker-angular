import { Category } from '../../../shared/models/category/category';
import { CategoryActions, CategoryActionTypes } from '../actions/category.actions';

export interface State {
  category: Category;
  requesting: boolean;
  error: object;
}

export const initialState: State = {
  category: null,
  requesting: false,
  error: null
};

export function reducer(state: State = initialState, action: CategoryActions) {
  switch (action.type) {
    case CategoryActionTypes.GET_CATEGORY_REQUEST: {
      return {
        ...state,
        requesting: true,
        category: null,
        error: null
      };
    }
    case CategoryActionTypes.GET_CATEGORY_SUCCESS: {
      return {
        ...state,
        requesting: false,
        category: action.payload.category,
        error: null
      };
    }
    case CategoryActionTypes.GET_CATEGORY_FAILURE: {
      return {
        ...state,
        requesting: false,
        category: null,
        error: action.payload.error
      };
    }
    default:
      return state;
  }
}

export const selectCategory = (state: State) => state.category;
export const selectCategoryRequesting = (state: State) => state.requesting;
export const selectCategoryError = (state: State) => state.error;

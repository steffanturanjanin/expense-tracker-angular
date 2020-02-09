import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Expense } from '../../../shared/models/expense/expense';
import { ExpensesActions, ExpensesActionTypes } from '../actions/expenses.actions';

export interface State extends EntityState<Expense> {
  requesting: boolean;
  error: object | null;
}

export const adapter: EntityAdapter<Expense> = createEntityAdapter<Expense>();

export const initialState: State = adapter.getInitialState({
  requesting: false,
  error: null
});

export function reducer(state: State = initialState, action: ExpensesActions) {
  switch (action.type) {
    case ExpensesActionTypes.CREATE_EXPENSE_REQUEST: {
      return {
        ...state,
        requesting: true,
        error: null
      };
    }
    case ExpensesActionTypes.CREATE_EXPENSE_SUCCESS: {
      return adapter.addOne(action.payload.expense,
        { ...state, requesting: false, error: null});
    }
    case ExpensesActionTypes.CREATE_EXPENSE_FAILURE: {
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

export const getExpensesRequesting = (state: State) => state.requesting;

export const getExpensesError = (state: State) => state.error;

const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal
} = adapter.getSelectors();

export const selectExpensesIds = selectIds;

export const selectExpensesEntities = selectEntities;

export const selectExpensesAll = selectAll;

export const selectExpensesTotal = selectTotal;

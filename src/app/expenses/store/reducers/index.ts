import * as expenses from './expenses.reducers';

export interface ExpensesState {
  expenses: expenses.State;
}

export const reducers = {
  expenses: expenses.reducer
};



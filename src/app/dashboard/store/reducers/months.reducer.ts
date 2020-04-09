import { MonthsActions, MonthsActionTypes } from '../actions/months.actions';

export interface State {
  monthList: [];
  requesting: boolean;
  error: object;
}

export const initialState: State = {
  monthList: [],
  requesting: false,
  error: null
};

export function reducer(state: State = initialState, action: MonthsActions): State {
  switch (action.type) {
    case MonthsActionTypes.GET_MONTH_LIST_REQUEST: {
      return {
        ...state,
        requesting: true,
        error: null
      };
    }
    case MonthsActionTypes.GET_MONTH_LIST_SUCCESS: {
      return {
        ...state,
        monthList: action.payload.months,
        requesting: false,
        error: null
      };
    }
    case MonthsActionTypes.GET_MONTH_LIST_FAILURE: {
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

export const getMonths = (state: State) => state.monthList;
export const getMonthsRequesting = (state: State) => state.requesting;
export const getMonthsError = (state: State) => state.error;

import { ReportsActions, ReportsActionTypes } from '../actions/reports.actions';

export interface State {
  report: any;
  type: string;
  error: object | null;
  requesting: boolean;
}

export const initialState: State = {
  report: null,
  type: 'overall',
  error: null,
  requesting: false
};

export function reducer(state = initialState, action: ReportsActions): State {
  switch (action.type) {
    case ReportsActionTypes.GET_ALL_REPORTS_REQUEST: {
      return {
        ...state,
        error: null,
        requesting: true
      };
    }
    case ReportsActionTypes.GET_ALL_REPORTS_SUCCESS: {
      return {
        ...state,
        type: 'overall',
        report: action.payload.report,
        error: null,
        requesting: false
      };
    }
    case ReportsActionTypes.GET_ALL_REPORTS_FAILURE: {
      return {
        ...state,
        report: null,
        requesting: false
      };
    }
    case ReportsActionTypes.GET_MONTHLY_REPORT_REQUEST: {
      return {
        ...state,
        requesting: true
      };
    }
    case ReportsActionTypes.GET_MONTHLY_REPORT_SUCCESS: {
      return {
        ...state,
        type: 'monthly',
        report: action.payload.report,
        error: null,
        requesting: false
      };
    }
    case ReportsActionTypes.GET_MONTHLY_REPORT_FAILURE: {
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

export const getReport = (state: State) => state.report;
export const getReportType = (state: State) => state.type;
export const getReportError = (state: State) => state.error;
export const getReportRequesting = (state: State) => state.requesting;

import {User} from '../../../shared/models/user/user';
import {AuthActions, AuthActionTypes} from '../actions/auth.actions';

export interface State {
  isAuthenticated: boolean;
  user: User | null;
  error: object | null;
  requesting: boolean;
}

export const initialState: State = {
  isAuthenticated: false,
  user: null,
  error: null,
  requesting: false
};

export function reducer(state = initialState, action: AuthActions): State {
  switch (action.type) {
    case AuthActionTypes.SIGNUP_REQUEST: {
      return {
        ...state,
        isAuthenticated: false,
        user: null,
        error: null,
        requesting: true
      };
    }
    case AuthActionTypes.SIGNUP_SUCCESS: {
      return {
        ...state,
        isAuthenticated: true,
        user: {
          token: action.payload.token,
          email: action.payload.email
        },
        error: null,
        requesting: false
      };
    }
    case AuthActionTypes.SIGNUP_FAILURE: {
      return {
        ...state,
        isAuthenticated: false,
        user: null,
        error: action.payload.error,
        requesting: false
      };
    }
    case AuthActionTypes.LOGIN_REQUEST: {
      return {
        ...state,
        isAuthenticated: false,
        user: null,
        error: null,
        requesting: true
      };
    }
    case AuthActionTypes.LOGIN_SUCCESS: {
      return {
        ...state,
        isAuthenticated: true,
        user: {
          token: action.payload.token,
          email: action.payload.email
        },
        error: null,
        requesting: false
      };
    }
    case AuthActionTypes.LOGIN_FAILURE: {
      console.log(action.payload);
      return {
        ...state,
        isAuthenticated: false,
        user: null,
        error: action.payload.error,
        requesting: false
      };
    }
    case AuthActionTypes.GET_AUTHENTICATED_USER_REQUEST: {
      return {
        ...state
      };
    }
    case AuthActionTypes.GET_AUTHENTICATED_USER_SUCCESS: {
      return {
        ...state,
        isAuthenticated: true,
        user: {
          token: action.payload.token,
          email: action.payload.email,
        },
        error: null,
        requesting: false
      };
    }
    case AuthActionTypes.GET_AUTHENTICATED_USER_FAILURE: {
      return {
        ...state
      };
    }
    default: {
      return state;
    }
  }
}

export const getAuthUser = (state: State) => state.user;
export const getAuthError = (state: State) => state.error;
export const getAuthRequesting = (state: State) => state.requesting;


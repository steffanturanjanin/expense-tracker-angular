import * as auth from './auth.reducers';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export interface AuthState {
  auth: auth.State;
}

export const reducers = {
  auth: auth.reducer,
};

export const getAuthFeatureState = createFeatureSelector<AuthState>('authenticationFeature');

export const getAuthState = createSelector(
  getAuthFeatureState,
  (state: AuthState) => state.auth
);

export const getAuthErrors = createSelector(
  getAuthState,
  auth.getAuthError
);

export const getAuthRequesting = createSelector(
  getAuthState,
  auth.getAuthRequesting
);

export const getAuthUser = createSelector(
  getAuthState,
  auth.getAuthUser
);

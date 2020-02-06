import { AuthState } from './authentication/store/reducers';
import { CategoriesState } from './categories/store/reducers';

export interface AppState {
  AuthState: AuthState;
  CategoriesState: CategoriesState;
}

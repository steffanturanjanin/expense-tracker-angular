import { AuthState } from './authentication/store/reducers';
import { CategoriesState } from './categories/store/reducers';
import { ExpensesState } from './expenses/store/reducers';
import { DashboardState } from './dashboard/store/reducers';

export interface AppState {
  AuthState: AuthState;
  CategoriesState: CategoriesState;
  ExpensesState: ExpensesState;
  DashboardState: DashboardState;
}

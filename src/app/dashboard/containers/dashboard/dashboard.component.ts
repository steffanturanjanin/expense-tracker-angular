import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import {AppState} from '../../../app.state';
import {Observable} from 'rxjs';
import {Expense} from '../../../shared/models/expense/expense';
import {Category} from '../../../shared/models/category/category';
import {GetAllExpensesRequestAction, GetExpensesRequestAction, RemoveExpenses} from '../../../expenses/store/actions/expenses.actions';
import {GetCategoriesRequestAction} from '../../../categories/store/actions/categories.actions';

import * as fromExpensesStore from '../../../expenses/store/reducers/index';
import * as fromCategoriesStore from '../../../categories/store/reducers/index';
import * as fromDashboardStore from '../../store/reducers/index';
import {GetAllReportsRequestAction, GetMonthlyReportRequestAction} from '../../store/actions/reports.actions';
import {GetMonthListRequestAction} from '../../store/actions/months.actions';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  report$: Observable<any>;
  reportType$: Observable<string>;
  months$: Observable<any>;
  expenses$: Observable<Expense[]>;
  categories$: Observable<Category[]>;
  requestingExpenses$: Observable<boolean>;
  requestingCategories$: Observable<boolean>;

  constructor(private store: Store<AppState>) {
  }

  ngOnInit() {
    this.store.dispatch(new GetAllReportsRequestAction());
    this.store.dispatch(new GetAllExpensesRequestAction());
    this.store.dispatch(new GetCategoriesRequestAction());
    this.store.dispatch(new GetMonthListRequestAction());

    this.report$ = this.store.select(fromDashboardStore.selectReport);
    this.reportType$ = this.store.select(fromDashboardStore.selectReportType);
    this.expenses$ = this.store.select(fromExpensesStore.selectExpensesAll);
    this.categories$ = this.store.select(fromCategoriesStore.selectCategoriesAll);
    this.months$ = this.store.select(fromDashboardStore.selectMonths);

    this.requestingExpenses$ = this.store.select(fromExpensesStore.selectExpensesRequesting);
    this.requestingCategories$ = this.store.select(fromCategoriesStore.selectCategoriesRequesting);
  }

  onMonthReportClick(year: number, month: number) {
    this.store.dispatch(new GetMonthlyReportRequestAction({ year, month }));
    this.store.dispatch(new RemoveExpenses());
    this.store.dispatch(new GetExpensesRequestAction({ year, month }));
  }

  onOverallReportClick() {
    this.store.dispatch(new GetAllReportsRequestAction());
    this.store.dispatch(new RemoveExpenses());
    this.store.dispatch(new GetAllExpensesRequestAction());
  }
}

import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSort } from '@angular/material/sort';
import { MatDialog, MatDialogConfig } from '@angular/material';

import { Store } from '@ngrx/store';

import { Observable, Subscription } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { AddExpenseFormComponent } from './components/add-expense-form/add-expense-form.component';

import * as fromStore from '../../store/reducers/index';

import {
  DeleteExpensesRequestAction,
  GetExpensesByCategoryRequestAction,
  GetExpensesByMonthRequestAction,
  RemoveExpenses
} from '../../store/actions/expenses.actions';

import { GetCategoryRequestAction } from '../../store/actions/category.actions';

import { Expense } from '../../../shared/models/expense/expense';

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.css']
})

export class ExpensesComponent implements OnInit, OnDestroy {
  requesting$: Observable<boolean>;
  expenses$: Observable<Expense[]>;
  expenses: Expense[];
  categorySubscription: Subscription;
  expensesSubscription: Subscription;
  routeDataScubscription: Subscription;
  showToolbar: boolean;
  showStats: boolean;
  showDelete = false;
  title: string;
  income: number;
  expense: number;

  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(
    private store: Store<fromStore.ExpensesState>,
    private router: Router,
    private route: ActivatedRoute,
    private dialog: MatDialog) {}

  static calculateIncome(expenses: Expense[]) {
    return expenses.filter(expense => expense.type === 'income')
      .reduce((accumulator, expense) => accumulator + expense.amount, 0);
  }

  static calculateExpense(expenses: Expense[]) {
    return expenses.filter(expense => expense.type === 'expense')
      .reduce((accumulator, expense) => accumulator + expense.amount, 0);
  }

  ngOnInit() {
    this.requesting$ = this.store.select(fromStore.selectExpensesRequesting);

    this.store.dispatch(new RemoveExpenses());

    this.routeDataScubscription = this.route.data.subscribe(data => {
      switch (data.reportType) {
        case 'month': {
          const formatter = new Intl.DateTimeFormat('en', { month: 'long' });
          const date = new Date();
          const year = date.getFullYear();
          const month = date.getMonth() + 1;
          const monthName = formatter.format(date);

          this.store.dispatch(new GetExpensesByMonthRequestAction({ year, month }));

          this.title = 'Monthly report for ' +  monthName + ' ' + year;
          this.showToolbar = true;
          this.showStats = true;

          break;
        }

        case 'category': {
          this.categorySubscription = this.route.paramMap.pipe(
            switchMap(params => {
              this.store.dispatch(new GetCategoryRequestAction({id: params.get('id')} ));
              return this.store.select(fromStore.selectCategory);
            })
          )
            .subscribe(category => {
              if (category) {
                this.title = 'Report for category ' + category.name;
                this.store.dispatch(new GetExpensesByCategoryRequestAction({id: category.id}));
              }
            })
          ;

          this.showToolbar = false;
          this.showStats = false;

          break;
        }
      }
    });

    this.expenses$ = this.store.select(fromStore.selectExpensesAll);

    this.expensesSubscription = this.expenses$.subscribe((expenses) => {
      this.expenses = expenses;
      this.income = ExpensesComponent.calculateIncome(this.expenses);
      this.expense =  ExpensesComponent.calculateExpense(this.expenses);
    });
  }

  ngOnDestroy() {
    if (this.categorySubscription) {
      this.categorySubscription.unsubscribe();
    }
    this.expensesSubscription.unsubscribe();
    this.routeDataScubscription.unsubscribe();
  }

  onDialogOpen() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '40%';
    this.dialog.open(AddExpenseFormComponent, dialogConfig);
  }

  onShowDelete() {
    this.showDelete = !this.showDelete;
  }

  deleteExpense(expense) {
    this.store.dispatch(new DeleteExpensesRequestAction({ id: expense.id }));
    this.requesting$.subscribe((requesting) => {
        if (!requesting) {
          this.showDelete = false;
        }
    });
  }
}

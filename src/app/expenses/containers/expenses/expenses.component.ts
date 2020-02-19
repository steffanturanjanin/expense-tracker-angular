import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { MatSort } from '@angular/material/sort';
import { MatDialog, MatDialogConfig } from '@angular/material';
import {AddExpenseFormComponent} from './components/add-expense-form/add-expense-form.component';
import {Store} from '@ngrx/store';
import {AppState} from '../../../app.state';
import {DeleteExpensesRequestAction, GetExpensesRequestAction, RemoveExpenses} from '../../store/actions/expenses.actions';
import * as fromStore from '../../store/reducers/index';
import * as fromCategoriesStore from '../../../categories/store/reducers/index';
import { Expense } from '../../../shared/models/expense/expense';
import {ActivatedRoute, Router} from '@angular/router';
import {Category} from '../../../shared/models/category/category';
import {GetCategoriesRequestAction} from '../../../categories/store/actions/categories.actions';

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.css']
})

export class ExpensesComponent implements OnInit {
  categories$: Observable<Category[]>;
  expenses$: Observable<Expense[]>;
  requesting$: Observable<boolean>;
  showDelete = false;
  expenses: Expense[];
  income: number;
  expense: number;

  formatter = new Intl.DateTimeFormat('en', { month: 'long' });
  date = new Date();
  year = this.date.getFullYear();
  month = this.date.getMonth() + 1;
  monthName = this.formatter.format(this.date);

  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(private store: Store<AppState>, private router: Router, private route: ActivatedRoute, private dialog: MatDialog) {}

  ngOnInit() {
    this.requesting$ = this.store.select(fromStore.selectExpensesRequesting);

    this.store.dispatch(new RemoveExpenses());
    this.store.dispatch(new GetExpensesRequestAction({year: this.year, month: this.month}));
    this.store.dispatch(new GetCategoriesRequestAction());

    this.categories$ = this.store.select(fromCategoriesStore.selectCategoriesAll);
    this.expenses$ = this.store.select(fromStore.selectExpensesAll);

    this.expenses$.subscribe((expenses) => {
      this.expenses = expenses;
      this.income = this.calculateIncome(this.expenses);
      this.expense =  this.calculateExpense(this.expenses);
    });

    console.log(this.route.snapshot.params);
  }

  onDialogOpen() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '60%';
    dialogConfig.data = {animal: 'panda'};
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

  calculateIncome(expenses: Expense[]) {
    return expenses.filter(expense => expense.type === 'income')
      .reduce((accumulator, expense) => accumulator + expense.amount, 0);
  }

  calculateExpense(expenses: Expense[]) {
    return expenses.filter(expense => expense.type === 'expense')
      .reduce((accumulator, expense) => accumulator + expense.amount, 0);
  }
}

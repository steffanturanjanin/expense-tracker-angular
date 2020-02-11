import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatDialog, MatDialogConfig } from '@angular/material';
import {AddExpenseFormComponent} from './components/add-expense-form/add-expense-form.component';
import {Store} from '@ngrx/store';
import {AppState} from '../../../app.state';
import {DeleteExpensesRequestAction, GetExpensesRequestAction} from '../../store/actions/expenses.actions';
import * as fromStore from '../../store/reducers/index';
import { Expense } from '../../../shared/models/expense/expense';

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.css']
})

export class ExpensesComponent implements OnInit {
  deletingExpense = -1;
  requesting$: Observable<boolean>;
  showDelete = false;
  displayedColumns: string[] = ['id', 'category', 'name', 'amount', 'date', 'type', 'actions', 'loader'];
  dataSource: MatTableDataSource<Expense>;

  formatter = new Intl.DateTimeFormat('en', { month: 'long' });
  date = new Date();
  year = this.date.getFullYear();
  month = this.date.getMonth() + 1;
  monthName = this.formatter.format(this.date);

  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(private store: Store<AppState>, private dialog: MatDialog) {}

  ngOnInit() {
    const formatter = new Intl.DateTimeFormat('en', { month: 'long' });
    const date = new Date();
    console.log(formatter.format(date));

    this.requesting$ = this.store.select(fromStore.selectExpensesRequesting);

    this.store.dispatch(new GetExpensesRequestAction({year: this.year, month: this.month}));
    this.store.select(fromStore.selectExpensesAll).subscribe((expenses) => {
      this.dataSource = new MatTableDataSource();
      this.dataSource.data = expenses;
      this.dataSource.sort = this.sort;
    });
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

  deleteExpense(row) {
    console.log(row);
    this.deletingExpense = row.id;
    this.store.dispatch(new DeleteExpensesRequestAction({id: row.id}));
    this.requesting$.subscribe((requesting) => {
        if (!requesting) {
          this.showDelete = false;
        }
    });
  }

}

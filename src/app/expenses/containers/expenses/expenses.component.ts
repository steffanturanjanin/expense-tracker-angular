import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatDialog, MatDialogConfig } from '@angular/material';
import {AddExpenseFormComponent} from './components/add-expense-form/add-expense-form.component';

export interface Expense {
  id: number;
  category: string;
  name: string;
  price: number;
  date: string;
  type: string;
}

const ELEMENT_DATA: Expense[] = [
  { id: 1, category: 'Bills', name: 'Parking Bill', price: 150.00, date: '01.12.2019.', type: 'expense'},
  { id: 2, category: 'Salary', name: 'First Part Salary', price: 42000.00, date: '01.12.2019.', type: 'income'},
  { id: 3, category: 'Food', name: 'Groceries', price: 15000.00, date: '07.12.2019.', type: 'expense'},
  { id: 4, category: 'Bank', name: 'Credit', price: 1200.00, date: '11.12.2019.', type: 'expense'}
];

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.css']
})

export class ExpensesComponent implements OnInit {
  displayedColumns: string[] = ['id', 'category', 'name', 'price', 'date', 'type'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(private dialog: MatDialog) {}

  ngOnInit() {
    this.dataSource.sort = this.sort;
  }

  onDialogOpen() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '60%';
    dialogConfig.data = {animal: 'panda'};
    this.dialog.open(AddExpenseFormComponent, dialogConfig);
  }

}

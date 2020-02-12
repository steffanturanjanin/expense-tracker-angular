import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild} from '@angular/core';
import {MatSort, MatTableDataSource} from '@angular/material';
import {Expense} from '../../../../../shared/models/expense/expense';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-expenses-table',
  templateUrl: './expenses-table.component.html',
  styleUrls: ['./expenses-table.component.css']
})
export class ExpensesTableComponent implements OnInit, OnChanges {

  deletingExpense = -1;
  // showDelete = false;
  displayedColumns: string[] = ['id', 'category', 'name', 'amount', 'date', 'type', 'actions', 'loader'];
  dataSource: MatTableDataSource<Expense>;

  @Input() expenses: Expense[];
  @Input() requesting$: Observable<boolean> | null;
  @Input() showDelete: boolean;

  @Output() onExpenseDeleted = new EventEmitter<Expense>();


  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor() { }

  ngOnInit() {
    this.dataSource = new MatTableDataSource();
    this.dataSource.data = this.expenses;
    this.dataSource.sort = this.sort;
  }

  deleteExpense(row) {
    console.log(row);
    this.deletingExpense = row.id;
    this.onExpenseDeleted.emit(row);
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.dataSource = new MatTableDataSource();
    this.dataSource.data = this.expenses;
    this.dataSource.sort = this.sort;
  }

  seeRowValue(row) {
    console.log(row);
  }
}

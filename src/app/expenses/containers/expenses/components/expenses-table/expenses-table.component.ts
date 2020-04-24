import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { MatSort, MatTableDataSource } from '@angular/material';
import { MatPaginator } from '@angular/material/paginator';
import { Expense } from '../../../../../shared/models/expense/expense';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-expenses-table',
  templateUrl: './expenses-table.component.html',
  styleUrls: ['./expenses-table.component.css']
})
export class ExpensesTableComponent implements OnInit, OnChanges {

  deletingExpense = -1;
  displayedColumns: string[] = ['id', 'category', 'name', 'amount', 'date', 'type', 'actions', 'loader'];
  dataSource: MatTableDataSource<Expense>;

  @Input() expenses: Expense[];
  @Input() requesting$: Observable<boolean> | null;
  @Input() showDelete: boolean;

  @Output() onExpenseDeleted = new EventEmitter<Expense>();

  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor() { }

  ngOnInit() {
    this.dataSource = new MatTableDataSource(this.expenses);
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  deleteExpense(row) {
    this.deletingExpense = row.id;
    this.onExpenseDeleted.emit(row);
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.dataSource = new MatTableDataSource();
    this.dataSource.data = this.expenses;
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }
}

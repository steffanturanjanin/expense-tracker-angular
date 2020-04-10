import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Expense } from '../../../../../shared/models/expense/expense';

@Component({
  selector: 'app-overall-expense',
  templateUrl: './overall-expense.component.html',
  styleUrls: ['./overall-expense.component.css']
})
export class OverallExpenseComponent implements OnInit, OnDestroy {
  private expenseSubscription: Subscription;
  private expense: number;

  constructor() { }

  @Input() expenses$: Observable<Expense[]>;

  ngOnInit() {
    this.expenseSubscription = this.expenses$.subscribe((expenses) => this.expense = this.calculateExpense(expenses));
  }

  ngOnDestroy(): void {
    this.expenseSubscription.unsubscribe();
  }

  calculateExpense(expenses: Expense[]) {
    return expenses.filter(expense => expense.type === 'expense')
      .reduce((accumulator, expense) => accumulator + expense.amount, 0);
  }
}

import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Expense } from '../../../../../shared/models/expense/expense';

@Component({
  selector: 'app-income',
  templateUrl: './income.component.html',
  styleUrls: ['./income.component.css']
})
export class IncomeComponent implements OnInit, OnDestroy {
  private expensesSubscription: Subscription;
  private income: number;

  constructor() { }

  @Input() expenses$: Observable<Expense[]>;

  ngOnInit() {
    this.expensesSubscription = this.expenses$.subscribe((expenses) => this.income = this.calculateIncome(expenses));
  }

  ngOnDestroy(): void {
    this.expensesSubscription.unsubscribe();
  }

  calculateIncome(expenses: Expense[]) {
    return expenses.filter(expense => expense.type === 'income')
      .reduce((accumulator, expense) => accumulator + expense.amount, 0);
  }
}

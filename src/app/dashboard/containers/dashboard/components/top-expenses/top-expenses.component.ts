import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Expense } from '../../../../../shared/models/expense/expense';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-top-expenses',
  templateUrl: './top-expenses.component.html',
  styleUrls: ['./top-expenses.component.css', '../../dashboard.component.css']
})
export class TopExpensesComponent implements OnInit, OnDestroy {
  private expensesSubscription: Subscription;
  topExpenses = [];

  constructor() { }

  @Input() expenses$: Observable<Expense[]>;
  @Input() numberOfTopExpenses: number;
  @Input() requestingExpenses$: Observable<boolean>;

  ngOnInit() {
    this.expensesSubscription = this.expenses$.subscribe((expenses) => {
      this.topExpenses = expenses
        .filter((expense) => !!expense.category)
        .sort((expense1: Expense, expense2: Expense) => {
        return (expense1.amount < expense2.amount) ? 1 : -1;
      })
        .slice(0, this.numberOfTopExpenses);
    });
  }

  ngOnDestroy(): void {
    this.expensesSubscription.unsubscribe();
  }

}

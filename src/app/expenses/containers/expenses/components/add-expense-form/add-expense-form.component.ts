import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DecimalPipe } from '@angular/common';

import { Store } from '@ngrx/store';
import * as fromStore from '../../../../store/reducers/index';
import * as fromCategoriesStore from '../../../../../categories/store/reducers/index';
import { AppState } from '../../../../../app.state';

import { GetCategoriesRequestAction } from '../../../../../categories/store/actions/categories.actions';
import { CreateExpenseRequestAction } from '../../../../store/actions/expenses.actions';

import { Observable } from 'rxjs';

import { Category } from '../../../../../shared/models/category/category';
import { Expense } from '../../../../../shared/models/expense/expense';

@Component({
  selector: 'app-add-expense-form',
  templateUrl: './add-expense-form.component.html',
  styleUrls: ['./add-expense-form.component.css']
})
export class AddExpenseFormComponent implements OnInit {

  categories$: Observable<Category[]>;
  requesting$: Observable<boolean>;
  error: object | null;
  form = new FormGroup({
    name: new FormControl(null, [Validators.required, Validators.minLength(6), Validators.nullValidator]),
    category: new FormControl(null, [Validators.required, Validators.nullValidator]),
    amount: new FormControl(null, [Validators.required, Validators.nullValidator]),
    type: new FormControl(null, [Validators.required, Validators.nullValidator])
  });

  get name() { return this.form.get('name'); }

  constructor(public dialogRef: MatDialogRef<AddExpenseFormComponent>,
              @Inject(MAT_DIALOG_DATA) public data,
              private store: Store<AppState>) { }

  ngOnInit() {
    this.store.dispatch(new GetCategoriesRequestAction());
    this.categories$ = this.store.select(fromCategoriesStore.selectCategoriesAll);
    this.requesting$ = this.store.select(fromStore.selectExpensesRequesting);

    this.store.select(fromStore.selectExpensesError).subscribe((error: object) => {
      this.error = error;
      if (error !== null && error !== undefined) {
        Object.keys(error).forEach((prop) => {
          const formControl = this.form.get(prop);
          if (formControl) {
            formControl.setErrors({
              validationError: error[prop]
            });
          }
        });
      }
    });
  }

  onSubmit(form) {
    if (form.errors === null) {
      const expense = new Expense();
      expense.name = form.value.name;
      expense.category = form.value.category !== null ? Number(form.value.category) : null;
      expense.amount = form.value.amount;
      expense.type = form.value.type !== null ? Number(form.value.type) : null;

      this.store.dispatch(new CreateExpenseRequestAction(expense));
    }

    this.onClose();
  }

  onClose() {
    if (this.form.valid && this.error === null) {
      this.requesting$.subscribe((requesting) => {
        if (!requesting) {
          this.dialogRef.close();
        }
      });
    }
  }

  onSelectTypeChange(event) {
    if (event.value.toString() === '1') {
      this.form.get('category').reset(null);
      this.form.get('category').disable();
    } else {
      this.form.get('category').enable();
    }
  }

  formatValue(e) {
    e.target.value = new DecimalPipe('en').transform(e.target.value, '1.2-2');
  }


}

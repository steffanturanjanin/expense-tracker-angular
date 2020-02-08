import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {_isNumberValue} from '@angular/cdk/typings/coercion';
import {Store} from '@ngrx/store';
import {AppState} from '../../../../../app.state';
import {GetCategoriesRequestAction} from '../../../../../categories/store/actions/categories.actions';
import * as fromCategoriesStore from '../../../../../categories/store/reducers/index';
import {Observable} from 'rxjs';
import {Category} from '../../../../../shared/models/category/category';
import {Dictionary} from '@ngrx/entity';
import {FormControl, FormGroup} from '@angular/forms';
import {Expense} from '../../../../../shared/models/expense/expense';
import {CreateExpenseRequestAction} from '../../../../store/actions/expenses.actions';

@Component({
  selector: 'app-add-expense-form',
  templateUrl: './add-expense-form.component.html',
  styleUrls: ['./add-expense-form.component.css']
})
export class AddExpenseFormComponent implements OnInit {

  categories$: Observable<Dictionary<Category>>;
  form = new FormGroup({
    name: new FormControl(),
    category: new FormControl(),
    amount: new FormControl(),
    type: new FormControl()
  });


  constructor(public dialogRef: MatDialogRef<AddExpenseFormComponent>,
              @Inject(MAT_DIALOG_DATA) public data,
              private store: Store<AppState>) { }

  ngOnInit() {
    this.store.dispatch(new GetCategoriesRequestAction());
    this.categories$ = this.store.select(fromCategoriesStore.selectCategoriesEntities);
    console.log(this.categories$);
  }

  onSubmit(form) {
    //
    console.log(form.value);
    const expense = new Expense();
    expense.name = form.value.name;
    expense.category = Number(form.value.category);
    expense.amount = form.value.amount;
    expense.type = Number(form.value.type);
    console.log(expense);

    this.store.dispatch(new CreateExpenseRequestAction(expense));
    // this.onClose();
  }

  onClose() {
    this.dialogRef.close();
  }

  formatValue(e) {
    if (e.target.value > 2147483647) {
      e.target.value = 2147483647;
    }
    e.target.value = parseFloat(e.target.value).toFixed(2);
    /*console.log(e.target.value);
    e.target.value = e.target.value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');*/
  }

}

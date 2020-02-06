import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-create-category-form',
  templateUrl: './create-category-form.component.html',
  styleUrls: ['./create-category-form.component.css']
})
export class CreateCategoryFormComponent implements OnChanges {

  @Input() selectedIcon: string;
  @Input() set error(error: object) {
    if (error !== null) {
      Object.keys(error).forEach((prop) => {
        const formControl = this.form.get(prop);
        if (formControl) {
          console.log(error[prop]);
          formControl.setErrors({
            validationError: error[prop]
          });
        }
      });
    }
  }

  @Output() categoryName = new EventEmitter();

  form = new FormGroup({
    categoryName: new FormControl(),
  });

  constructor() {}

  onSubmit(form) {
    const categoryName = form.value.categoryName !== null ? form.value.categoryName.trim() : form.value.categoryName;
    if (categoryName === '' || categoryName === null) {
      form.get('categoryName').setErrors({
        validationError: 'You must enter category name'
      });
    } else {
      this.categoryName.emit(categoryName);
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    /*if (changes.error.currentValue !== null) {
      if (changes.error.currentValue.hasOwnProperty('error')) {
        this.form.get('categoryName').setErrors({
          validationError: changes.error.currentValue.error
        });
      }
    }*/
  }

}

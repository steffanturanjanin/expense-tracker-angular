import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import * as fromStore from '../../store/reducers/index';
import { CategoriesState } from '../../store/reducers';
import {CreateCategoryRequestAction} from '../../store/actions/categories.actions';

@Component({
  selector: 'app-create-category',
  templateUrl: './create-category.component.html',
  styleUrls: ['./create-category.component.css']
})
export class CreateCategoryComponent implements OnInit {
  defaultIcon: string;
  selectedIcon: string;
  error: object;

  constructor(private store: Store<CategoriesState>) { }

  ngOnInit() {
    this.defaultIcon = 'fa-certificate';
    this.selectedIcon = this.defaultIcon;

    this.store.select(fromStore.selectCategoriesError)
      .subscribe((error) => {
        console.log(error);
        this.error = error;
      });
  }

  selectIcon(icon) {
    console.log(icon);
    if (icon === this.selectedIcon) {
      this.selectedIcon = this.defaultIcon;
    } else {
      this.selectedIcon = icon;
    }
  }

  createCategory(event) {
    const payload = {
      name: event,
      icon: this.selectedIcon
    };
    console.log(payload);
    this.store.dispatch(new CreateCategoryRequestAction(payload));
  }
}

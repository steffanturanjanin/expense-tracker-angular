import { Component, OnInit } from '@angular/core';
import {Category} from '../../../shared/models/category/category';
import {Store} from '@ngrx/store';
import * as fromStore from '../../store/reducers/index';
import {CategoriesState} from '../../store/reducers';
import {DeleteCategoryRequestAction, GetCategoriesRequestAction} from '../../store/actions/categories.actions';
import {Observable} from 'rxjs';
import {Dictionary} from '@ngrx/entity';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  categories$: Observable<Dictionary<Category>>;
  requesting$: Observable<boolean>;
  deletingCategoryId: number | null;

  constructor(private store: Store<CategoriesState>) {
    this.deletingCategoryId = null;
  }

  ngOnInit() {
    this.store.dispatch(new GetCategoriesRequestAction());
    this.categories$ = this.store.select(fromStore.selectCategoriesEntities);
    this.requesting$ = this.store.select(fromStore.selectCategoriesRequesting);
  }

  onDeletedCategory(id: number) {
    this.deletingCategoryId = id;
    this.store.dispatch(new DeleteCategoryRequestAction({ id }));
  }

}

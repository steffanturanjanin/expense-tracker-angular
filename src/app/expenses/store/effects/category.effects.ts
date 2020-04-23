import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { CategoriesService } from '../../../core/services/categories/categories.service';
import { of } from 'rxjs';
import {
  CategoryActionTypes,
  GetCategoryFailureAction,
  GetCategoryRequestAction,
  GetCategorySuccessAction
} from '../actions/category.actions';
import { catchError, map, switchMap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable()
export class CategoryEffects {
  constructor(private actions: Actions, private categoriesService: CategoriesService, private router: Router) {}

  @Effect()
  getCategoryRequestAction$ = this.actions.pipe(
    ofType<GetCategoryRequestAction>(CategoryActionTypes.GET_CATEGORY_REQUEST),
    switchMap(action => {
      return this.categoriesService.getCategory(action.payload.id).pipe(
        map((response) => new GetCategorySuccessAction({ category: response })),
        catchError((error) => {
          this.router.navigateByUrl('/');
          return of(new GetCategoryFailureAction({ error }));
        })
      );
    }),
  );
}

import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { CategoriesService } from '../../../core/services/categories/categories.service';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import {
  CategoriesActionTypes,
  CreateCategoryFailureAction,
  CreateCategoryRequestAction,
  CreateCategorySuccessAction, DeleteCategoryFailureAction,
  DeleteCategoryRequestAction, DeleteCategorySuccessAction,
  GetCategoriesFailureAction,
  GetCategoriesRequestAction,
  GetCategoriesSuccessAction
} from '../actions/categories.actions';
import { catchError, map, switchMap } from 'rxjs/operators';

@Injectable()
export class CategoriesEffects {
  constructor(
    private actions: Actions,
    private categoriesService: CategoriesService,
    private router: Router,
  ) {}

  @Effect()
  createCategoryRequestAction$: Observable<any> = this.actions.pipe(
    ofType<CreateCategoryRequestAction>(CategoriesActionTypes.CREATE_CATEGORY_REQUEST),
    map((action: CreateCategoryRequestAction) => action.payload),
    switchMap(payload => {
      return this.categoriesService.createCategory(payload.name, payload.icon).pipe(
        map((response) => {
           this.router.navigateByUrl('categories');
           return new CreateCategorySuccessAction({ category: response });
        }),
        catchError((error) => {
          return of(new CreateCategoryFailureAction({ error }));
        })
      );
    })
  );

  @Effect()
  getCategoriesRequestAction$: Observable<any> = this.actions.pipe(
    ofType<GetCategoriesRequestAction>(CategoriesActionTypes.GET_CATEGORIES_REQUEST),
    switchMap(() => { return this.categoriesService.getCategories().pipe(
      map((response) => {
        return new GetCategoriesSuccessAction({ categories: response});
      }),
      catchError((error) => {
        return of(new GetCategoriesFailureAction({ error }));
      })
    ); })
  );

  @Effect()
  deleteCategoryRequestAction$: Observable<any> = this.actions.pipe(
    ofType<DeleteCategoryRequestAction>(CategoriesActionTypes.DELETE_CATEGORY_REQUEST),
    map((action: DeleteCategoryRequestAction) => action.payload),
    switchMap(payload => {
      return this.categoriesService.deleteCategory(payload.id).pipe(
        map((response) => {
          console.log(response);
          return new DeleteCategorySuccessAction({category: response});
        }),
        catchError((error) => {
          return of(new DeleteCategoryFailureAction({ error }));
        })
      );
    })
  );
}

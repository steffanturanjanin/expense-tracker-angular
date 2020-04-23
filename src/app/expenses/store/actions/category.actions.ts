import { Action } from '@ngrx/store';

export enum CategoryActionTypes {
  GET_CATEGORY_REQUEST = '[Category] Get Category Request',
  GET_CATEGORY_SUCCESS = '[Category] Get Category Success',
  GET_CATEGORY_FAILURE = '[Category] Get Category Failure',
}

export class GetCategoryRequestAction implements Action {
  readonly type = CategoryActionTypes.GET_CATEGORY_REQUEST;
  constructor(public payload: any) {}
}

export class GetCategorySuccessAction implements Action {
  readonly type = CategoryActionTypes.GET_CATEGORY_SUCCESS;
  constructor(public payload: any) {}
}

export class GetCategoryFailureAction implements Action {
  readonly type = CategoryActionTypes.GET_CATEGORY_FAILURE;
  constructor(public payload: any) {}
}


export type CategoryActions =
  | GetCategoryRequestAction
  | GetCategorySuccessAction
  | GetCategoryFailureAction;

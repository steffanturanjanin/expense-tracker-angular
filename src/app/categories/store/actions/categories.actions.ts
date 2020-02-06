import { Action } from '@ngrx/store';

export enum CategoriesActionTypes {
  CREATE_CATEGORY_REQUEST = '[Categories] Create Category Request',
  CREATE_CATEGORY_SUCCESS = '[Categories] Create Category Success',
  CREATE_CATEGORY_FAILURE = '[Categories] Create Category Failure',

  GET_CATEGORIES_REQUEST = '[Categories] Get Categories Request',
  GET_CATEGORIES_SUCCESS = '[Categories] Get Categories Success',
  GET_CATEGORIES_FAILURE = '[Categories] Get Categories Failure',

  DELETE_CATEGORY_REQUEST = '[Categories] Delete Category Request',
  DELETE_CATEGORY_SUCCESS = '[Categories] Delete Category Success',
  DELETE_CATEGORY_FAILURE = '[Categories] Delete Category Failure',
}

export class CreateCategoryRequestAction implements Action {
  readonly type = CategoriesActionTypes.CREATE_CATEGORY_REQUEST;
  constructor(public payload: any) {}
}

export class CreateCategorySuccessAction implements Action {
  readonly type = CategoriesActionTypes.CREATE_CATEGORY_SUCCESS;
  constructor(public payload: any) {}
}

export class CreateCategoryFailureAction implements Action {
  readonly type = CategoriesActionTypes.CREATE_CATEGORY_FAILURE;
  constructor(public payload: any) {}
}

export class GetCategoriesRequestAction implements Action {
  readonly type = CategoriesActionTypes.GET_CATEGORIES_REQUEST;
}

export class GetCategoriesSuccessAction implements Action {
  readonly type = CategoriesActionTypes.GET_CATEGORIES_SUCCESS;
  constructor(public payload: any) {}
}

export class GetCategoriesFailureAction implements Action {
  readonly type = CategoriesActionTypes.GET_CATEGORIES_FAILURE;
  constructor(public payload: any) {}
}

export class DeleteCategoryRequestAction implements Action {
  readonly type = CategoriesActionTypes.DELETE_CATEGORY_REQUEST;
  constructor(public payload: any) {}
}

export class DeleteCategorySuccessAction implements Action {
  readonly type = CategoriesActionTypes.DELETE_CATEGORY_SUCCESS;
  constructor(public payload: any) {}
}

export class DeleteCategoryFailureAction implements Action {
  readonly type = CategoriesActionTypes.DELETE_CATEGORY_FAILURE;
  constructor(public payload: any) {}
}

export type CategoriesActions =
  | CreateCategoryRequestAction
  | CreateCategorySuccessAction
  | CreateCategoryFailureAction
  | GetCategoriesRequestAction
  | GetCategoriesSuccessAction
  | GetCategoriesFailureAction
  | DeleteCategoryRequestAction
  | DeleteCategorySuccessAction
  | DeleteCategoryFailureAction;

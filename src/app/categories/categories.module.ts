import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriesComponent } from './containers/categories/categories.component';
import { CustomMaterialModule } from '../core/material.module';
import { CategoriesRoutingModule } from './categories-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateCategoryComponent } from './containers/create-category/create-category.component';
import { CreateCategoryFormComponent } from './containers/create-category/components/create-category-form/create-category-form.component';
import { CategoryIconListComponent } from './containers/create-category/components/category-icon-list/category-icon-list.component';
import { StoreModule } from '@ngrx/store';
import { reducers } from './store/reducers';
import { EffectsModule } from '@ngrx/effects';
import { effects } from './store/effects';

import { CategoryCardComponent } from './containers/categories/components/category-card/category-card.component';

@NgModule({
  declarations: [
    CategoriesComponent,
    CreateCategoryComponent,
    CreateCategoryFormComponent,
    CategoryIconListComponent,
    CategoryCardComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CustomMaterialModule,
    CategoriesRoutingModule,
    StoreModule.forFeature('categoriesFeature', reducers),
    EffectsModule.forFeature(effects)
  ],
  exports: [
    CategoriesComponent,
    CreateCategoryComponent,
    CreateCategoryFormComponent,
    CategoryIconListComponent
  ]
})
export class CategoriesModule { }

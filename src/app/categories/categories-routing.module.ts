import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { CreateCategoryComponent } from './containers/create-category/create-category.component';
import { AuthenticatedLayoutComponent } from '../shared/layouts/authenticated-layout/authenticated-layout.component';
import { CategoriesComponent } from './containers/categories/categories.component';
import {NotFoundComponent} from '../shared/components/not-found/not-found.component';

import { AuthGuardService } from '../core/guards/auth-guard.service';

const categoriesRoutes: Routes = [
  { path: 'categories', component: AuthenticatedLayoutComponent, canActivate: [AuthGuardService],
    children: [
      { path: '', component: CategoriesComponent },
      { path: 'create', component: CreateCategoryComponent },
      { path: '**', component: NotFoundComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(categoriesRoutes)],
  exports: [RouterModule]
})

export class CategoriesRoutingModule { }

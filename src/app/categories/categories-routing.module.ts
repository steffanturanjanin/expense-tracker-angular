import { RouterModule, Routes } from '@angular/router';
import { CategoriesComponent } from './containers/categories/categories.component';
import { AuthGuardService } from '../core/guards/auth-guard.service';
import { NgModule } from '@angular/core';
import {CreateCategoryComponent} from './containers/create-category/create-category.component';
import {AuthenticatedLayoutComponent} from '../shared/layouts/authenticated-layout/authenticated-layout.component';

/*const categoriesRoutes: Routes = [
  { path: 'categories/create-category', component: CreateCategoryComponent, canActivate: [AuthGuardService], pathMatch: 'full' },
  { path: 'categories', component: CategoriesComponent, canActivate: [AuthGuardService], pathMatch: 'full' },
];*/

const categoriesRoutes: Routes = [
  { path: 'categories', component: AuthenticatedLayoutComponent, canActivate: [AuthGuardService],
    children: [
      { path: '', component: CategoriesComponent },
      { path: 'create-category', component: CreateCategoryComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(categoriesRoutes)],
  exports: [RouterModule]
})

export class CategoriesRoutingModule { }

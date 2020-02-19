import { RouterModule, Routes } from '@angular/router';
import { CategoriesComponent } from './containers/categories/categories.component';
import { AuthGuardService } from '../core/guards/auth-guard.service';
import { NgModule } from '@angular/core';
import { CreateCategoryComponent } from './containers/create-category/create-category.component';
import { AuthenticatedLayoutComponent } from '../shared/layouts/authenticated-layout/authenticated-layout.component';
import {AuthenticationModule} from '../authentication/authentication.module';
import {NotFoundComponent} from '../shared/components/not-found/not-found.component';

const categoriesRoutes: Routes = [
  { path: 'categories', component: AuthenticatedLayoutComponent, canActivate: [AuthGuardService],
    children: [
      { path: '', component: CategoriesComponent },
      { path: 'create-category', component: CreateCategoryComponent },
      // { path: '**', component: NotFoundComponent}
      { path: '**', redirectTo: '404'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(categoriesRoutes)],
  exports: [RouterModule]
})

export class CategoriesRoutingModule { }

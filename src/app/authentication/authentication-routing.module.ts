import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SignUpComponent } from './containers/sign-up/sign-up.component';
import { LogInComponent } from './containers/log-in/log-in.component';
import { LoggedInGuardService } from '../core/guards/logged-in-guard.service';
import { AuthenticationLayoutComponent } from '../shared/layouts/authentication-layout/authentication-layout.component';
import { NotFoundComponent } from '../shared/components/not-found/not-found.component';

const authenticationRoutes: Routes = [
  { path: '', component: AuthenticationLayoutComponent, canActivate: [LoggedInGuardService],
    children: [
      { path: '', component: LogInComponent },
      { path: 'signup', component: SignUpComponent },
      { path: '**', component: NotFoundComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(authenticationRoutes)],
  exports: [RouterModule]
})

export class AuthenticationRoutingModule { }

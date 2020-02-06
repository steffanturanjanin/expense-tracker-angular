import { Injectable } from '@angular/core';
import { AuthService } from '../auth.service';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import {Observable} from 'rxjs';
import {Store} from '@ngrx/store';
import * as fromStore from '../../authentication/store/reducers';
import {GetAuthenticatedUserRequestAction, LoginSuccessAction} from '../../authentication/store/actions/auth.actions';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(public store: Store<fromStore.AuthState>, public authService: AuthService, public router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const token = this.authService.getToken();
    if (!token) {
      this.router.navigateByUrl('/');
      return false;
    } else {
      this.store.dispatch(new GetAuthenticatedUserRequestAction({token}));
      return true;
    }
  }
}

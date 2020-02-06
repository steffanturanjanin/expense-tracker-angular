import { Component, OnInit } from '@angular/core';
import {User} from '../../models/user/user';
import {AppState} from '../../../app.state';
import {Store} from '@ngrx/store';
import * as fromAuthStore from '../../../authentication/store/reducers/index';

@Component({
  selector: 'app-authenticated-layout',
  templateUrl: './authenticated-layout.component.html',
  styleUrls: ['./authenticated-layout.component.css']
})
export class AuthenticatedLayoutComponent implements OnInit {
  user: User;
  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.store.select(fromAuthStore.getAuthUser).subscribe((user) => this.user = user);
  }

}

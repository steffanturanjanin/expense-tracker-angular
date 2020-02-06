import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import {AppState} from './app.state';
import * as fromAuthStore from './authentication/store/reducers/index';
import {Observable} from 'rxjs';
import {User} from './shared/models/user/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'expense-tracker-angular';
  user: User;
  constructor(private store: Store<AppState>) {
  }

  ngOnInit() {
    this.store.select(fromAuthStore.getAuthUser).subscribe((state) => this.user = state);
  }
}

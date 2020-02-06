import {Component, OnInit, Renderer2} from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromStore from '../../store/reducers/index';
import {Observable} from 'rxjs';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {LoginRequestAction} from '../../store/actions/auth.actions';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
  requesting$: Observable<boolean>;

  form = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email, Validators.nullValidator ]),
    password: new FormControl(null, [Validators.required, Validators.minLength(6), Validators.nullValidator])
  });

  constructor(private store: Store<fromStore.AuthState>, private renderer: Renderer2) {
    this.renderer.setStyle(document.body, 'background-color', '#ffeaa7');
  }

  ngOnInit() {
    this.requesting$ = this.store.select(fromStore.getAuthRequesting);
    this.store.select(fromStore.getAuthErrors)
      .subscribe((state: { authentication: string }) => {
        if (state !== null && state !== undefined) {
          Object.keys(state).forEach((prop) => {
            const formControl = this.form.get(prop);
            if (formControl) {
              formControl.setErrors({
                validationError: state[prop]
              });
            }
          });
          if (state.hasOwnProperty('authentication')) {
            this.form.get('email').setErrors({
              authenticationError: state.authentication
            });
            this.form.get('password').setErrors({
              authenticationError: state.authentication
            });
            this.form.setErrors({
              authenticationError: state.authentication
            });
          }
        }
      });
  }

  onSubmit(form): void {
    const payload = {
      email: form.value.email,
      password: form.value.password
    };
    if (payload.email !== null && payload.password !== null) {
      this.store.dispatch(new LoginRequestAction(payload));
    }
  }
}

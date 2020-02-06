import { Component, OnInit, Renderer2 } from '@angular/core';
import { Store } from '@ngrx/store';
import { AuthState } from '../../store/reducers';
import * as fromStore from '../../store/reducers/index';
import { SignUpRequestAction } from '../../store/actions/auth.actions';
import { Observable } from 'rxjs';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  requesting$: Observable<boolean>;

  form = new FormGroup({
    email: new FormControl(),
    password: new FormControl()
  });

  constructor(private store: Store<fromStore.AuthState>, private renderer: Renderer2) {
    this.renderer.setStyle(document.body, 'background-color', '#ffeaa7');
  }

  ngOnInit() {
    this.requesting$ = this.store.select(fromStore.getAuthRequesting);
    this.store.select(fromStore.getAuthErrors)
       .subscribe((state) => {
         if (state !== null) {
           Object.keys(state).forEach((prop) => {
             const formControl = this.form.get(prop);
             if (formControl) {
               formControl.setErrors({
                 validationError: state[prop]
               });
             }
           });
         }
       });
  }

  onSubmit(form): void {
    console.log(form);
    const payload = {
      email: form.value.email,
      password: form.value.password
    };
    this.store.dispatch(new SignUpRequestAction(payload));
  }
}

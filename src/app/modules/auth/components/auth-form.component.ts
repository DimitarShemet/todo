import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Output,
} from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';

import { logIn } from 'src/app/store/actions/auth-actions';

@Component({
  selector: 'auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthFormComponent {
  form = this.fb.group({
    username: this.fb.control('', Validators.required),
    password: this.fb.control('', Validators.required),
  });

  get username() {
    return this.form.controls.username as FormControl;
  }

  get password() {
    return this.form.controls.password as FormControl;
  }

  constructor(private fb: FormBuilder, private store: Store) {}

  @Output() enableSpinner = new EventEmitter<boolean>();

  submitForm() {
    if (this.form.valid) {
      this.store.dispatch(
        logIn({
          data: {
            email: this.form.get('username')?.value,
            password: this.form.get('password')?.value,
          },
        })
      );
      this.enableSpinner.emit(true);
    }
    return;
  }
}

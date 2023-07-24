import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { ModulePath } from 'src/app/shared/enums/routing-path.enums';
import { createTodo, resetError } from 'src/app/store/actions/todos-actions';
import { errorSelector } from 'src/app/store/selectors/error-selector';

@Component({
  selector: 'app-todo-create-page',
  templateUrl: './todo-create-page.component.html',
  styleUrls: ['./todo-create-page.component.scss'],
})
export class TodoCreatePageComponent {
  form = this.fb.group({
    title: this.fb.control('', Validators.required),
    completed: this.fb.control(false),
    user: this.fb.control(1),
  });
  isSpinning: boolean;
  $error = this.store.select(errorSelector);

  get title() {
    return this.form.controls.title as FormControl;
  }

  constructor(
    private fb: FormBuilder,
    private store: Store,
    private router: Router
  ) {}

  handleOk(): void {
    this.store.dispatch(resetError());
  }

  handleCancel(): void {
    this.store.dispatch(resetError());
  }

  submitForm() {
    if (this.form.valid) {
      this.store.dispatch(createTodo({ todo: this.form.getRawValue() }));
      this.router.navigate([
        ModulePath.CoreFullPath + ModulePath.TodoListFullPath,
      ]);
    }
    return;
  }
}

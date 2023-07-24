import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { ModulePath } from 'src/app/shared/enums/routing-path.enums';
import { editTodo, resetError } from 'src/app/store/actions/todos-actions';
import { errorSelector } from 'src/app/store/selectors/error-selector';

@Component({
  selector: 'app-todo-edit-page',
  templateUrl: './todo-edit-page.component.html',
  styleUrls: ['./todo-edit-page.component.scss'],
})
export class TodoEditPageComponent {
  id: string;
  $error = this.store.select(errorSelector);
  form = this.fb.group({
    title: this.fb.control('', Validators.required),
    completed: this.fb.control(false, Validators.required),
    user: this.fb.control(null),
  });

  get title() {
    return this.form.controls.title as FormControl;
  }

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private store: Store,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.data.subscribe((val) => {
      this.id = val['todo'].id;
      this.form.patchValue(val['todo']);
    });
  }

  submitForm() {
    if (this.form.valid) {
      this.store.dispatch(
        editTodo({ id: this.id, todo: this.form.getRawValue() })
      );
      this.router.navigate([
        ModulePath.CoreFullPath + ModulePath.TodoListFullPath,
      ]);
    }
    return;
  }

  handleOk(): void {
    this.store.dispatch(resetError());
  }

  handleCancel(): void {
    this.store.dispatch(resetError());
  }
}

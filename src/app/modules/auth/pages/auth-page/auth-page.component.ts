import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { resetError } from 'src/app/store/actions/todos-actions';
import { errorSelector } from 'src/app/store/selectors/error-selector';

@Component({
  selector: 'app-auth-page',
  templateUrl: './auth-page.component.html',
  styleUrls: ['./auth-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthPageComponent {
  isSpinning = false;
  $error = this.store.select(errorSelector);

  constructor(private store: Store) {}

  enableSpinner(condition: boolean) {
    this.isSpinning = condition;
  }

  handleOk(): void {
    this.store.dispatch(resetError());
  }

  handleCancel(): void {
    this.store.dispatch(resetError());
  }
}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoCreatePageComponent } from './pages/todo-create-page/todo-create-page.component';
import { TodoCreateRoutingModule } from './todo-create-routing.module';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFormModule } from 'ng-zorro-antd/form';
import { ReactiveFormsModule } from '@angular/forms';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzInputModule } from 'ng-zorro-antd/input';
import { GetErrorMessagePipe } from 'src/app/shared/pipes/get-error-message.pipe';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzSpinModule } from 'ng-zorro-antd/spin';

@NgModule({
  declarations: [TodoCreatePageComponent],
  imports: [
    CommonModule,
    TodoCreateRoutingModule,
    NzButtonModule,
    NzFormModule,
    ReactiveFormsModule,
    NzCheckboxModule,
    NzInputModule,
    GetErrorMessagePipe,
    NzModalModule,
    NzSpinModule,
  ],
})
export class TodoCreateModule {}

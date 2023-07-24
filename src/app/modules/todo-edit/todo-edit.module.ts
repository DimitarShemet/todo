import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoEditPageComponent } from './pages/todo-edit-page/todo-edit-page.component';
import { TodoEditRoutingModule } from './todo-edit-routing.module';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFormModule } from 'ng-zorro-antd/form';
import { ReactiveFormsModule } from '@angular/forms';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzInputModule } from 'ng-zorro-antd/input';
import { GetErrorMessagePipe } from 'src/app/shared/pipes/get-error-message.pipe';
import { NzModalModule } from 'ng-zorro-antd/modal';

@NgModule({
  declarations: [TodoEditPageComponent],
  imports: [
    CommonModule,
    TodoEditRoutingModule,
    NzButtonModule,
    NzFormModule,
    ReactiveFormsModule,
    NzCheckboxModule,
    NzInputModule,
    GetErrorMessagePipe,
    NzModalModule,
  ],
})
export class TodoEditModule {}

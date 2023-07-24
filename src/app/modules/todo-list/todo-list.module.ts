import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzTableModule } from 'ng-zorro-antd/table';
import { TodoListPageComponent } from './pages/todo-list-page/todo-list-page.component';
import { TodoListRoutingModule } from './todo-list-routing.module';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzSpinModule } from 'ng-zorro-antd/spin';

@NgModule({
  declarations: [TodoListPageComponent],
  imports: [
    CommonModule,
    TodoListRoutingModule,
    NzTableModule,
    NzIconModule,
    NzButtonModule,
    NzModalModule,
    NzSpinModule,
  ],
})
export class TodoListModule {}

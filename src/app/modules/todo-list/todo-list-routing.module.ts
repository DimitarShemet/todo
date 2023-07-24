import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagePath } from 'src/app/shared/enums/routing-path.enums';
import { TodoListPageComponent } from './pages/todo-list-page/todo-list-page.component';

const routes: Routes = [
  {
    path: PagePath.TodoList,
    component: TodoListPageComponent,
  },
  {
    path: '**',
    redirectTo: PagePath.TodoList,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TodoListRoutingModule {}

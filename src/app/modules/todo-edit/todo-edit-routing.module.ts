import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagePath } from 'src/app/shared/enums/routing-path.enums';
import { TodoEditPageComponent } from './pages/todo-edit-page/todo-edit-page.component';

const routes: Routes = [
  {
    path: PagePath.TodoCreate,
    component: TodoEditPageComponent,
  },
  {
    path: '**',
    redirectTo: PagePath.TodoCreate,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TodoEditRoutingModule {}

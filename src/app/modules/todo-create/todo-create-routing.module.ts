import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagePath } from 'src/app/shared/enums/routing-path.enums';
import { TodoCreatePageComponent } from './pages/todo-create-page/todo-create-page.component';

const routes: Routes = [
  {
    path: PagePath.TodoCreate,
    component: TodoCreatePageComponent,
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
export class TodoCreateRoutingModule {}

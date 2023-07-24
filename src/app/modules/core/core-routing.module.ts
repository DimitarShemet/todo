import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModulePath, PagePath } from 'src/app/shared/enums/routing-path.enums';
import { CorePageComponent } from './pages/core-page/core-page.component';
import { todoResolver } from 'src/app/shared/resolvers/todo.resolver';

const routes: Routes = [
  {
    path: PagePath.Core,
    component: CorePageComponent,
    children: [
      {
        path: ModulePath.TodoCreate,
        loadChildren: () =>
          import('../todo-create/todo-create.module').then(
            (m) => m.TodoCreateModule
          ),
      },
      {
        path: ModulePath.TodoEdit,
        loadChildren: () =>
          import('../todo-edit/todo-edit.module').then((m) => m.TodoEditModule),
        resolve: {
          todo: todoResolver,
        },
      },
      {
        path: ModulePath.TodoList,
        loadChildren: () =>
          import('../todo-list/todo-list.module').then((m) => m.TodoListModule),
      },
      {
        path: '**',
        redirectTo: ModulePath.TodoList,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoreRoutingModule {}

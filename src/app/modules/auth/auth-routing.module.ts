import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthPageComponent } from './pages/auth-page/auth-page.component';
import { PagePath } from 'src/app/shared/enums/routing-path.enums';

const routes: Routes = [
  { path: PagePath.Auth, component: AuthPageComponent },
  { path: '**', redirectTo: PagePath.Auth },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class AuthRoutingModule {}

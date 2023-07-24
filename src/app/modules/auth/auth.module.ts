import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { AuthPageComponent } from './pages/auth-page/auth-page.component';
import { AuthRoutingModule } from './auth-routing.module';
import { AuthFormComponent } from './components/auth-form.component';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzFormModule } from 'ng-zorro-antd/form';
import { GetErrorMessagePipe } from 'src/app/shared/pipes/get-error-message.pipe';
import { NzModalModule } from 'ng-zorro-antd/modal';

@NgModule({
  declarations: [AuthFormComponent, AuthPageComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    NzCheckboxModule,
    NzButtonModule,
    AuthRoutingModule,
    NzSpinModule,
    NzInputModule,
    NzFormModule,
    GetErrorMessagePipe,
    NzModalModule,
  ],
})
export class AuthModule {}

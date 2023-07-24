import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CoreRoutingModule } from './core-routing.module';
import { CorePageComponent } from './pages/core-page/core-page.component';

@NgModule({
  declarations: [CorePageComponent],
  imports: [CommonModule, CoreRoutingModule],
})
export class CoreModule {}

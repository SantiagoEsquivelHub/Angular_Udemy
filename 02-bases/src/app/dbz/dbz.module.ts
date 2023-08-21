import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DBZMainPageComponent } from './pages/main-page.component';

@NgModule({
  declarations: [
    DBZMainPageComponent
  ],
  exports: [
    DBZMainPageComponent
  ],
  imports: [
    CommonModule
  ],
})
export class DbzModule { }

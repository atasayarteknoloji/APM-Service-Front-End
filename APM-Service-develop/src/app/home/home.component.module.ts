import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HomeComponent} from './home.component';
import {InternalModule} from '../shared/internal/internal.module';

@NgModule({
  declarations: [
    HomeComponent,
  ],
  exports:[

  ],
  imports: [
    CommonModule,
    FormsModule,
    InternalModule
  ]
})
export class HomeComponentModule {
}

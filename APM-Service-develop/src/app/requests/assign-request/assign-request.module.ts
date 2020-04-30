import {CommonModule} from '@angular/common';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {AssignRequestRoutingModule} from './assign-request-routing.module';
import {AssignRequestComponent} from './assign-request.component';
import {InternalModule} from 'src/app/shared/internal/internal.module';


@NgModule({
  declarations: [
    AssignRequestComponent
  ],
  imports: [
    CommonModule,
    AssignRequestRoutingModule,
    InternalModule
  ],
  exports: [
    AssignRequestComponent
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AssignRequestModule {
}

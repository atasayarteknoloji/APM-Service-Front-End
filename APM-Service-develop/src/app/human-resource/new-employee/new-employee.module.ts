import {CommonModule} from '@angular/common';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {NewEmployeeComponent} from './new-employee.component';
import {AngularMaterialModule} from 'src/app/angular-metarial.module';
import {InternalModule} from 'src/app/shared/internal/internal.module';

@NgModule({
  declarations: [NewEmployeeComponent],
  imports: [
    CommonModule,
    AngularMaterialModule,
    InternalModule],
  exports: [NewEmployeeComponent],
  bootstrap: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class NewEmployeeModule {
}

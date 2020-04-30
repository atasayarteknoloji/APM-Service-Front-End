import {CommonModule} from '@angular/common';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {EmployeeListComponent} from './employee-list.component';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {EmployeeListRoutingModule} from './employee-list-routing.module';
import {InternalModule} from 'src/app/shared/internal/internal.module';


@NgModule({
  declarations: [EmployeeListComponent],
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    EmployeeListRoutingModule,
    InternalModule
  ],
  exports: [EmployeeListComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class EmployeeListModule {
}

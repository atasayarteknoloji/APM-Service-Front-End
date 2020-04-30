import {CommonModule} from '@angular/common';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {CreateRequestComponent} from './create-request.component';
import {CreateRequestRoutingModule} from './create-request-routing.module';
import {RequestProviders} from '../../_services/request.providers';
import {ItemProviders} from '../../_services/item.providers';
import {CompanyProviders} from '../../_services/company.providers';
import {MatAutocompleteModule, MatInputModule} from '@angular/material';
import {InternalModule} from 'src/app/shared/internal/internal.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    CreateRequestComponent
  ],
  imports: [
    CommonModule,
    CreateRequestRoutingModule,
    MatAutocompleteModule,
    MatInputModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    InternalModule
  ],
  exports: [ CreateRequestComponent],
  providers: [
    RequestProviders,
    ItemProviders,
    CompanyProviders
  ],

  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class CreateRequestModule {
}

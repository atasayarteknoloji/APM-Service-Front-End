import {CommonModule} from '@angular/common';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {MatAutocompleteModule} from '@angular/material';
import {InternalModule} from 'src/app/shared/internal/internal.module';
import {ClosedTicketComponent} from './closed-ticket.component';
import { ClosedTicketRoutingModule } from './closed-ticket-routing.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ClosedTicketComponent,
  ],
  imports: [
    CommonModule,
    ClosedTicketRoutingModule,
    MatAutocompleteModule,
    InternalModule,
    FormsModule
  ],
  exports: [ClosedTicketComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ClosedTicketModule {
}

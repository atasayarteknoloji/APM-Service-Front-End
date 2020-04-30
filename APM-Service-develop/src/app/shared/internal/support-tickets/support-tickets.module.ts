import {CommonModule} from '@angular/common';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {MatAutocompleteModule} from '@angular/material';
import {InternalModule} from 'src/app/shared/internal/internal.module';
import { SupportTicketsComponent } from './support-tickets.component';
import { ClosedTicketModule } from 'src/app/requests/request-pool/closed-ticket/closed-ticket.module';
import { SupportTicketsRoutingModule } from './support-tickets-routing.module';


@NgModule({
  declarations: [
    SupportTicketsComponent
  ],
  imports: [
    CommonModule,
    ClosedTicketModule,
    SupportTicketsRoutingModule,
    MatAutocompleteModule,
    InternalModule
  ],
  exports: [SupportTicketsComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SupportTicketsModule {
}

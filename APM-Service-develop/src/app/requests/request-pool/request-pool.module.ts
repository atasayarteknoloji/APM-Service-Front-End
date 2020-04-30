import {CommonModule} from '@angular/common';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {MatAutocompleteModule} from '@angular/material';
import {InternalModule} from 'src/app/shared/internal/internal.module';
import {RequestPoolRoutingModule} from './request-pool-routing.module';
import {RequestPoolComponent} from './request-pool.component';
import { ClosedTicketComponent } from './closed-ticket/closed-ticket.component';
import { ClosedTicketModule } from './closed-ticket/closed-ticket.module';


@NgModule({
  declarations: [
    RequestPoolComponent
  ],
  imports: [
    CommonModule,
    ClosedTicketModule,
    RequestPoolRoutingModule,
    MatAutocompleteModule,
    InternalModule
  ],
  exports: [RequestPoolComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class RequestPoolModule {
}

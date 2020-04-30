import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ROUTING} from 'src/app/shared/routing';
import { SupportTicketsComponent } from './support-tickets.component';
import { ClosedTicketComponent } from 'src/app/requests/request-pool/closed-ticket/closed-ticket.component';

const routes: Routes = [{
  path: '',
  component: SupportTicketsComponent
},
  {
    path: ROUTING.CLOSED_TICKET,
    component: ClosedTicketComponent,
    data: {
      breadcrumb: 'Talep Kapatma',
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SupportTicketsRoutingModule {
}

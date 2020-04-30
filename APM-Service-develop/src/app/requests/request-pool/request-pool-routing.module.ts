import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RequestPoolComponent} from './request-pool.component';
import {ROUTING} from 'src/app/shared/routing';
import {ClosedTicketComponent} from './closed-ticket/closed-ticket.component';

const routes: Routes = [{
  path: '',
  component: RequestPoolComponent
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
export class RequestPoolRoutingModule {
}

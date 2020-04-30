import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ClosedTicketComponent} from './closed-ticket.component';

const routes: Routes = [{
  path: '',
  component: ClosedTicketComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClosedTicketRoutingModule {
}

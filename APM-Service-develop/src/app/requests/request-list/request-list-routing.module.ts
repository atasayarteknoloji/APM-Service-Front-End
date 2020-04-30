import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RequestListComponent} from './request-list.component';
import {ROUTING} from 'src/app/shared/routing';
import {RequestDetailComponent} from './request-detail/request-detail.component';


const routes: Routes = [{
  path: ROUTING.REQUEST_LIST,
  component: RequestListComponent,
  data: {
    breadcrumb: 'Talep Listesi',
  }
},
  {
    path: ROUTING.REQUEST_DETAIL + '/:ticketId',
    component: RequestDetailComponent,
    data: {
      breadcrumb: 'Talep Detayı',
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RequestListRoutingModule {
}

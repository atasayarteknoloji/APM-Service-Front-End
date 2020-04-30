import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RequestsComponent} from './requests.component';
import {ROUTING} from '../shared/routing';
import {CreateRequestComponent} from './create-request';
import {RequestListComponent} from './request-list/request-list.component';
import {AssignRequestComponent} from './assign-request/assign-request.component';
import {RequestPoolComponent} from './request-pool/request-pool.component';

const routes: Routes = [
  {
    path: '',
    component: RequestsComponent,
    data: {
      breadcrumb: 'Anasayfa',
    }
  },
  {
    path: ROUTING.REQUEST_OPEN,
    component: CreateRequestComponent,
    data: {
      breadcrumb: 'Yeni Talep',
    }
  },
  {
    path: ROUTING.REQUEST_LIST,
    component: RequestListComponent,
    data: {
      breadcrumb: 'Talep Listele',
    }
  },
  {
    path: ROUTING.REQUEST_POOL ,
    component: RequestPoolComponent,
    data: {
      breadcrumb: 'Talep Havuzum',
    }
  },
  {
    path: ROUTING.REQUEST_ASSIGN + '/:ticketId',
    component: AssignRequestComponent,
    data: {
      breadcrumb: 'Talep Atama',
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RequestsRoutingModule {
}

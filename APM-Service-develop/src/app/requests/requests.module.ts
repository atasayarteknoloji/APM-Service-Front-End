import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RequestsComponent} from './requests.component';
import {RequestsRoutingModule} from './requests-routing.module';
import {CreateRequestModule} from './create-request';
import {RequestListModule} from './request-list/request-list.module';
import {AssignRequestComponent} from './assign-request/assign-request.component';
import {Ng2SmartTableModule} from 'ng2-smart-table';
import {AngularMaterialModule} from '../angular-metarial.module';
import {RequestPoolModule} from './request-pool/request-pool.module';
import {InternalModule} from '../shared/internal/internal.module';


@NgModule({
  declarations: [
    RequestsComponent,
    AssignRequestComponent
  ],
  imports: [
    InternalModule,
    CreateRequestModule,
    RequestListModule,
    CommonModule,
    RequestPoolModule,
    RequestsRoutingModule,
    AngularMaterialModule,
    FormsModule
  ]
})
export class RequestsModule {
}

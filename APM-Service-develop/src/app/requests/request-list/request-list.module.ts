import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RequestListComponent} from './request-list.component';
import {RequestListRoutingModule} from './request-list-routing.module';
import {InternalModule} from 'src/app/shared/internal/internal.module';
import {Ng2SmartTableModule} from 'ng2-smart-table';
import {RequestDetailModule} from './request-detail/request-detail.module';


@NgModule({
  declarations: [
    RequestListComponent
  ],
  imports: [
    RequestDetailModule,
    CommonModule,
    RequestListRoutingModule,
    InternalModule,
    Ng2SmartTableModule
  ],
  exports: [RequestListComponent]
})
export class RequestListModule {
}

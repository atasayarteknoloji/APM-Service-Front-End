import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RequestDetailRoutingModule} from './request-detail-routing.module';
import {RequestDetailComponent} from './request-detail.component';
import {InternalModule} from 'src/app/shared/internal/internal.module';


@NgModule({
  declarations: [RequestDetailComponent],
  imports: [
    CommonModule,
    RequestDetailRoutingModule,
    InternalModule
  ],
  exports: [RequestDetailComponent]
})
export class RequestDetailModule {
}

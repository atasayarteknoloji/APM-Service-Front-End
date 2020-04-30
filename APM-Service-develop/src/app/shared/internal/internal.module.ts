import {CommonModule} from '@angular/common';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {BasicWidgetComponent} from './widgets/basic-widget/basic-widget.component';
import {ChartsModule} from 'ng2-charts';
import {LineChartComponent} from './line-chart/line-chart.component';
import {SupportTicketsComponent} from './support-tickets/support-tickets.component';
import {ApmButtonComponent} from './apm-button/apm-button.component';
import {PageHeaderComponent} from './page-header/page-header.component';
import { BreadcrumbComponent } from 'src/app/shared/internal/breadcrumb/breadcrumb.component';
import {RouterModule} from '@angular/router';


@NgModule({
  declarations: [
    LineChartComponent,
    BasicWidgetComponent,
    SupportTicketsComponent,
    ApmButtonComponent,
    PageHeaderComponent,
    BreadcrumbComponent
  ],
  exports:[
    LineChartComponent,
    BasicWidgetComponent,
    SupportTicketsComponent,
    ApmButtonComponent,
    PageHeaderComponent,
    BreadcrumbComponent
  ],
  imports: [
    RouterModule,
    CommonModule,
    FormsModule,
    ChartsModule],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class InternalModule {
}

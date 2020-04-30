import { MatDialogModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
// used to create fake backend
import { ErrorInterceptor, JwtInterceptor } from './_helpers';

import { AppComponent } from './app.component';
import { HomeComponent } from './home';
import { AdminComponent } from './admin';
import { LoginComponent } from './login';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { PERFECT_SCROLLBAR_CONFIG, PerfectScrollbarConfigInterface, PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AppRoutingModule } from './app.routing';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { DatePipe } from '@angular/common';
import { CdkTableModule } from '@angular/cdk/table';
import { RequestProviders } from './_services/request.providers';
import { ItemProviders } from './_services/item.providers';
import { CompanyProviders } from './_services/company.providers';
import { HumanResourceModule } from './human-resource/human-resource.module';;
import { RemoveItemComponent } from './components/remove-item/remove-item.component';
import { AssignItemComponent } from './components/assign-item/assign-item.component';
import { AssignTeamComponent } from './components/assign-team/assign-team.component';
import { EmployeelistProviders } from './_services/employee.provider';
import { TeamlistProviders } from './_services/team.providers';
import { AngularMaterialModule } from './angular-metarial.module';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NewPositionComponent } from './human-resource/new-employee/new-position/new-position.component';
import { HomeComponentModule } from './home/home.component.module';
import { RequestsModule } from './requests/requests.module';
import { BreadcrumbComponent } from './shared/internal/breadcrumb/breadcrumb.component';
import { BackuplistProviders } from './_services/backup.provider';
import { BackupListModule } from './backup-management/backup-list/backup-list.module';
import { CustomerDetailComponent } from './backup-management/customer-detail/customer-detail/customer-detail.component';
import { customerdetaillistProviders } from './_services/customer-detail.provider';
import { InternalModule } from './shared/internal/internal.module';
import { customereditProviders } from './_services/customer-edit.service';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};
@NgModule({
  exports: [
    CdkTableModule,
    ToastrModule
  ]
  ,
  declarations: [AssignTeamComponent],
  imports: [BrowserAnimationsModule]
})
export class DemoMaterialModule {
}

@NgModule({
  imports: [
    HomeComponentModule,
    RequestsModule,
    MatDialogModule,
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    PerfectScrollbarModule,
    BrowserAnimationsModule,
    AngularFontAwesomeModule,
    DemoMaterialModule,
    FormsModule,
    HumanResourceModule,
    AngularMaterialModule,
    BackupListModule,
    InternalModule,
    ToastrModule.forRoot({
      timeOut: 2000
    }) // ToastrModule added
  ],
  declarations: [
    AppComponent,
    AdminComponent,
    LoginComponent,
    SidebarComponent,
    NavbarComponent,
    RemoveItemComponent,
    AssignItemComponent,
    NewPositionComponent,
    CustomerDetailComponent],
  entryComponents: [
    RemoveItemComponent,
    AssignItemComponent,
    AssignTeamComponent,
    NewPositionComponent],

  providers: [
    RequestProviders,
    DatePipe,
    ItemProviders,
    CompanyProviders,
    EmployeelistProviders,
    BackuplistProviders,
    customerdetaillistProviders,
    customereditProviders,
    TeamlistProviders,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    }

    // provider used to create fake backend
    // fakeBackendProvider
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class AppModule {
}

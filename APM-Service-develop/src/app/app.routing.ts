import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home';
import {AdminComponent} from './admin';
import {LoginComponent} from './login';
import {AuthGuard} from './_helpers';
import {Role} from './_models';
import {NgModule} from '@angular/core';
import {ROUTING} from './shared/routing';
import {AssignRequestComponent} from './requests/assign-request/assign-request.component';
import {EmployeeListComponent} from './human-resource/employee-list/employee-list.component';
import {ROLETYPE} from './shared/role-type.dictionary';
import {TeamsComponent} from './human-resource/teams/teams.component';
import {NewEmployeeComponent} from './human-resource/new-employee/new-employee.component';
import {BackupListComponent} from './backup-management/backup-list/backup-list.component';
import {RequestsComponent} from './requests/requests.component';
import {HumanResourceComponent} from './human-resource/human-resource.component';
import { CustomerDetailComponent } from './backup-management/customer-detail/customer-detail/customer-detail.component';
import { CustomerEditComponent } from './backup-management/backup-list/customer-edit/customer-edit.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [AuthGuard],
    data: {
      breadcrumb: 'Anasayfa',
    }
  },
  {
    path: ROUTING.HOME,
    component: HomeComponent,
    canActivate: [AuthGuard],
    data: {
      breadcrumb: 'Anasayfa',
    }
  },
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AuthGuard],
    data: { breadcrumb: 'Admin',roles: [ROLETYPE.ADMIN]}
  },
  {
    path: 'login',
    component: LoginComponent,
    data: {
      breadcrumb: 'Giriş',
    }
  },

  {
    path:  ROUTING.REQUEST,
    component:RequestsComponent,
    loadChildren: () => import(`./requests/requests.module`).then(m => m.RequestsModule),
    data: {
      breadcrumb: 'Talep',
    }
  },
  {
    path:  ROUTING.HUMAN_RESOURCE,
    component:HumanResourceComponent,
    loadChildren: () => import(`./human-resource/human-resource.module`).then(m => m.HumanResourceModule),
    data: {
      breadcrumb: 'Talep',
    }
  },
  {
    path: ROUTING.EMPLOYEES,
    component: EmployeeListComponent,
    data: {
      breadcrumb: 'Çalışanlar',
    }
  },
  {
    path: ROUTING.REQUEST_CUSTOMERDETAIL + '/:idCostumer',
    component: CustomerDetailComponent,
    data: {
      breadcrumb: 'Detailar',
    }
  },
  {
    path: ROUTING.REQUEST_CUSTOMEREDIT + '/:idCostumer',
    component: CustomerEditComponent,
    data: {
      breadcrumb: 'Edit',
    }
  },
  {
    path: ROUTING.TEAMS,
    component: TeamsComponent,
    data: {
      breadcrumb: 'Takımlar',
    }
  },
  {
    path: ROUTING.NEW_EMPLOYEE,
    component: NewEmployeeComponent,
    data: {
      breadcrumb: 'Çalışanlar > Yeni Çalışan',
    }
  },
  {
    path: ROUTING.BACKUP_LIST,
    component: BackupListComponent,
    data: {
      breadcrumb: 'Backup Yönetimi',
    }
  },
  // otherwise redirect to home
  {path: '**', redirectTo: '', data: {
      breadcrumb: 'Anasayfa',
    }}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {enableTracing: false})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}


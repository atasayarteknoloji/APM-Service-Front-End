import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ROUTING} from '../shared/routing';
import {EmployeeListComponent} from './employee-list/employee-list.component';
import {TeamsComponent} from './teams/teams.component';
import {NewEmployeeComponent} from './new-employee/new-employee.component';
import {HumanResourceComponent} from './human-resource.component';

const routes: Routes = [
  {
    path: '',
    component: HumanResourceComponent,
    data: {
      breadcrumb: 'İnsan Kaynakları',
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

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HumanResourceRoutingModule {
  constructor(){
    console.log('human resource routing2deyim')
  }
}

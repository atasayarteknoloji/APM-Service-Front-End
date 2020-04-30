import {NgModule} from '@angular/core';
import {TeamsComponent} from './teams/teams.component';
import {EmployeeListComponent} from './employee-list/employee-list.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NewEmployeeComponent } from './new-employee/new-employee.component';
import {AngularMaterialModule} from '../angular-metarial.module';
import {HumanResourceRoutingModule} from './human-resource-routing.module';
import {HumanResourceComponent} from './human-resource.component';
import {EmployeeListModule} from './employee-list/employee-list.module';
import {NewEmployeeModule} from './new-employee/new-employee.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AngularMaterialModule,
    HumanResourceRoutingModule,
    EmployeeListModule,
    NewEmployeeModule
  ],
  declarations: [
    TeamsComponent,
    HumanResourceComponent
 ]
})
export class HumanResourceModule {
}

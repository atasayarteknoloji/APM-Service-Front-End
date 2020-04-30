import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {BackupListComponent} from './backup-list.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { CustomerEditComponent } from './customer-edit/customer-edit.component';


@NgModule({
  declarations: [BackupListComponent, CustomerEditComponent],
  imports: [CommonModule,BrowserModule,Ng2SmartTableModule,ReactiveFormsModule],
  exports: [BackupListComponent],

})
export class BackupListModule {
}




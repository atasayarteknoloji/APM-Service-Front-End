import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {AngularMaterialModule} from 'src/app/angular-metarial.module';
import {MatDialogModule} from '@angular/material';
import {NewPositionComponent} from './new-position.component';

@NgModule({
  declarations: [NewPositionComponent],
  imports: [CommonModule, AngularMaterialModule],
  exports: [NewPositionComponent],
  bootstrap: []
})
export class NewPositionModule {
}

import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {TeamsComponent} from './teams.component';
import { TeamDetailComponent } from './team-detail/team-detail.component';

@NgModule({
  declarations: [TeamsComponent, TeamDetailComponent],
  imports: [CommonModule],
  exports: [TeamsComponent]
})
export class TeamsModule {
}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AssignTeamComponent } from './assign-team.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule
    ],
    declarations: [
        AssignTeamComponent
    ]
})
export class AssignTeamModule {
}

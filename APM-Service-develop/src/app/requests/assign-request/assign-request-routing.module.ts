import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AssignRequestComponent} from './assign-request.component';

const routes: Routes = [{
  path: '',
  component: AssignRequestComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AssignRequestRoutingModule {
}

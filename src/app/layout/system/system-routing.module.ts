import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {SystemComponent} from './system.component';

const routes: Routes = [
  {
    path: 'system',
    component: SystemComponent,
    loadChildren: './system-children.module#SystemChildrenModule',
    data: {
      title: '系统管理'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SystemRoutingModule {
}

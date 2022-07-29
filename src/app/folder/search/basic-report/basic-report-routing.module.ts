import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BasicReportPage } from './basic-report.page';

const routes: Routes = [
  {
    path: '',
    component: BasicReportPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BasicReportPageRoutingModule {}

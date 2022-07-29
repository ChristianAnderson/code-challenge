import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BasicReportPageRoutingModule } from './basic-report-routing.module';

import { BasicReportPage } from './basic-report.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BasicReportPageRoutingModule
  ],
  declarations: [BasicReportPage]
})
export class BasicReportPageModule {}

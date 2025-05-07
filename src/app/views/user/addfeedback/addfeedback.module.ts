import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddfeedbackRoutingModule } from './addfeedback-routing.module';
import { AddfeedbackComponent } from './addfeedback/addfeedback.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AddfeedbackComponent
  ],
  imports: [
    CommonModule,
    AddfeedbackRoutingModule,
    FormsModule
  ]
})
export class AddfeedbackModule { }

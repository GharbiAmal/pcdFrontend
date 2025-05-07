import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddfeedbackComponent } from './addfeedback/addfeedback.component';

const routes: Routes = [
  {path:'',component:AddfeedbackComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddfeedbackRoutingModule { }

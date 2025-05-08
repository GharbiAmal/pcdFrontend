import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditprofilComponent } from './editprofil/editprofil.component';

const routes: Routes = [
    {path:'',component:EditprofilComponent}
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditprofilRoutingModule { }

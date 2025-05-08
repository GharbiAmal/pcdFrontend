import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditprofilRoutingModule } from './editprofil-routing.module';
import { EditprofilComponent } from './editprofil/editprofil.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    EditprofilComponent
  ],
  imports: [
    CommonModule,
    EditprofilRoutingModule,
    FormsModule
  ]
})
export class EditprofilModule { }

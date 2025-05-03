import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserLayoutComponent } from './user-layout/user-layout.component';
import { RouterModule } from '@angular/router';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { AuthAdminComponent } from './auth-admin/auth-admin.component'
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    UserLayoutComponent,
    AdminLayoutComponent,
    AuthAdminComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ]
})
export class LayoutModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserLayoutComponent } from './user-layout/user-layout.component';
import { RouterModule } from '@angular/router';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { AuthAdminComponent } from './auth-admin/auth-admin.component'


@NgModule({
  declarations: [
    UserLayoutComponent,
    AdminLayoutComponent,
    AuthAdminComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class LayoutModule { }

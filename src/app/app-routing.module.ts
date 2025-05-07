import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserLayoutComponent } from './layout/user-layout/user-layout.component';
import { AdminLayoutComponent } from './layout/admin-layout/admin-layout.component';
import { AuthAdminComponent } from './layout/auth-admin/auth-admin.component';

const routes: Routes = [
  {path:'',component:AdminLayoutComponent},
  {path:'user',component:UserLayoutComponent,children:[
    {path:'login',loadChildren:()=>import('./views/user/loginuser/loginuser.module').then(m=>m.LoginuserModule)},
    {path:'home',loadChildren:()=>import('./views/user/home/home.module').then(m=>m.HomeModule)},
    {path:'signup',loadChildren:()=>import('./views/user/register/register.module').then(m=>m.RegisterModule)},
    {path:'chatbot',loadChildren:()=>import('./views/user/chatbot/chatbot.module').then(m=>m.ChatbotModule)},
    {path:'feedback',loadChildren:()=>import('./views/user/addfeedback/addfeedback.module').then(m=>m.AddfeedbackModule)}

]},
  {path:'admin/login',component:AuthAdminComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    anchorScrolling: 'enabled',
    scrollOffset: [0, 70], // ajuste selon ton header

  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserLoginComponent } from './user-login/user-login.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import { AuthGuard } from './auth.guard';
import { TemplateTestComponent } from './template-test/template-test.component';
import { LandingComponent } from './landing/landing.component';
import { AboutComponent } from './about/about.component';


const routes: Routes = [
  {path:'', component: LandingComponent},
  {path:'home', component: LandingComponent},
  {path:'register',component:RegisterUserComponent},
  {path:'about',component:AboutComponent}
  // {path:'template',component:TemplateTestComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

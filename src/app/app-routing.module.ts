import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserLoginComponent } from './user-login/user-login.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import { AuthGuard } from './auth.guard';
import { TemplateTestComponent } from './template-test/template-test.component';
import { LandingComponent } from './landing/landing.component';


const routes: Routes = [
  {path:'', component: LandingComponent},
  {path:'register',component:RegisterUserComponent},
  // {path:'template',component:TemplateTestComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserLoginComponent } from './user-login/user-login.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import { AuthGuard } from './auth.guard';
import { TemplateTestComponent } from './template-test/template-test.component';
import { LandingComponent } from './landing/landing.component';
import { AboutComponent } from './about/about.component';
import { RegisterVehicleComponent } from './register-vehicle/register-vehicle.component';
import { ManageRidesComponent } from './manage-rides/manage-rides.component';
import { BookServiceComponent } from './book-service/book-service.component';
import { RegisterServiceCenterComponent } from './register-service-center/register-service-center.component';
import { ServiceStatusComponent } from './service-status/service-status.component';
import { RoleGuard } from './role.guard';
import { SignupServiceCenterComponent } from './signup-service-center/signup-service-center.component';
import { ServiceBookingListComponent } from './service-booking-list/service-booking-list.component';


const routes: Routes = [
  {path:'', component: LandingComponent},
  {path:'home', component: LandingComponent},
  {path:'register',component:RegisterUserComponent},
  {path:'about',component:AboutComponent},
  {path:'add-ride',component:ManageRidesComponent,canActivate:[AuthGuard]},
  {path:'book-service',component:BookServiceComponent,canActivate:[AuthGuard]},
  {path:'reg-center',component:RegisterServiceCenterComponent,canActivate:[AuthGuard,RoleGuard]},
  {path:'status',component:ServiceStatusComponent,canActivate:[AuthGuard]},
  {path:'signup',component:SignupServiceCenterComponent},
  {path:'incoming',component:ServiceBookingListComponent,canActivate:[AuthGuard,RoleGuard]},


  {path:'**',redirectTo:'home',pathMatch:'full'}
  // {path:'template',component:TemplateTestComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

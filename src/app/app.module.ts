import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { RegisterUserComponent } from './register-user/register-user.component';
import { HttpClientModule } from '@angular/common/http';
import { LoadingModalComponent } from './loading-modal/loading-modal.component';
import { MessageDisplayModalComponent } from './message-display-modal/message-display-modal.component';
import { AuthModule } from '@auth0/auth0-angular';
import { TemplateTestComponent } from './template-test/template-test.component';
import { NavbarComponent } from './core/navbar/navbar.component';
import { LandingComponent } from './landing/landing.component';
import { FooterComponent } from './core/footer/footer.component';



@NgModule({
  declarations: [
    AppComponent,
    UserLoginComponent,
    RegisterUserComponent,
    LoadingModalComponent,
    MessageDisplayModalComponent,
    TemplateTestComponent,
    NavbarComponent,
    LandingComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    CommonModule,
    RouterModule,
    ReactiveFormsModule,  
    HttpClientModule,
    AuthModule.forRoot({
      domain: 'dev-dm27a224tucleehl.jp.auth0.com',        // Replace with your Auth0 domain
      clientId: '26wvLEkJ4Z6UhGQHMoLJMIqV7M7PjGtd',  // Replace with your Auth0 client ID
      authorizationParams: {
        redirect_uri: 'http://localhost:4200/'// Redirect after login
      },
      cacheLocation: 'localstorage', // Optional: Use local storage to persist the state
      useRefreshTokens: true, // Optional: Enable refresh tokens for better token handling
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
 }

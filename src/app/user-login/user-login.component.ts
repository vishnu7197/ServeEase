import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { AuthService as Auth0Service } from '@auth0/auth0-angular';



@Component({
  selector: 'app-user-login',
  standalone: false,
  
  templateUrl: './user-login.component.html',
  styleUrl: './user-login.component.css'
})
export class UserLoginComponent {
  loginForm: FormGroup;

  constructor(private auth0: Auth0Service,private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onSubmit(): void {
    this.auth0.loginWithRedirect({appState: { target: '/' }});

  }
}

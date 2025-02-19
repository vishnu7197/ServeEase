import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'vehicle-servicing-app';
  originUrl=window.location.origin;
  constructor(public auth: AuthService,private router:Router) {
    this.auth.handleRedirectCallback().subscribe({
      next: () => {
        console.log('Redirect handled successfully.');
      },
      error: (err) => {
        console.error('Error during redirect handling:', err);
      }
    });
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  ngOninit(){
    this.auth.loginWithRedirect();
  }
}

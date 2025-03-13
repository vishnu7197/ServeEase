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
    
  }
  ngOnInit() {
    
  }

 
}

import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { VehicleApiCallService } from '../vehicle-api-call.service';
import { UserModel } from '../models/UserModel';
import { CustomAuthService } from '../auth.service';

@Component({
  selector: 'app-landing',
  standalone: false,
  
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css'
})
export class LandingComponent implements OnInit {
  user: UserModel | null = null;
  ngOnInit(): void {
    this.customAuth.user$.subscribe(userData => {
      this.user = userData;
    });
  }

  constructor(private auth:AuthService,private _service:VehicleApiCallService,private customAuth:CustomAuthService){}
}

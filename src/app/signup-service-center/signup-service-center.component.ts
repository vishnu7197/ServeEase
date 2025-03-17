import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { VehicleApiCallService } from '../vehicle-api-call.service';
import { catchError, Observable, switchMap, tap, throwError } from 'rxjs';
import { CustomAuthService } from '../auth.service';

@Component({
  selector: 'app-signup-service-center',
  standalone: false,
  
  templateUrl: './signup-service-center.component.html',
  styleUrl: './signup-service-center.component.css'
})
export class SignupServiceCenterComponent {

  email: string = '';
  password: string = '';
  selectedRole: string = 'service-center';

  constructor(private auth: AuthService,private _service:VehicleApiCallService, private http: HttpClient,private authService:CustomAuthService) {}

  // signup(event: Event) {
  //   event.preventDefault(); // Prevent form from reloading page

  //   const signupData = {
  //     email: this.email,
  //     password: this.password,
  //     connection: 'Username-Password-Authentication',
  //   };

  //   this.http.post(`https://dev-dm27a224tucleehl.jp.auth0.com/dbconnections/signup`, signupData).subscribe({
  //     next: (response: any) => {
  //       console.log('User Created:', response);
  //       this.assignRole(response._id);
  //     },
  //     error: (error) => console.error('Signup Error:', error),
  //   });
  // }

  
 

  // assignRole(userId: string) {
  //   var tokenModel:any={};
  //   this._service.getAuthToken().subscribe(
  //     (result:any)=>{
  //       tokenModel=result;
  //       const headers = new HttpHeaders({
  //         'Authorization': `Bearer ${tokenModel.access_token}`
  //       });
  //       this.http.get('https://dev-dm27a224tucleehl.jp.auth0.com/userinfo', { headers }).pipe(
  //         tap(userInfo => console.log('User Info:', userInfo)), // Logs correct user ID
  //         catchError(error => {
  //           console.error('User Info Error:', error);
  //           return throwError(error);
  //         })
  //       );
  //       const assignRoleUrl = `https://dev-dm27a224tucleehl.jp.auth0.com/api/v2/users/roles`;

  //       this.http.post(assignRoleUrl, { roles: [this.selectedRole] }, {
  //         headers: { Authorization: `Bearer ${tokenModel.access_token}` }
  //       }).subscribe({
  //         next: () => console.log('Role Assigned Successfully'),
  //         error: (error) => console.error('Role Assignment Error:', error),
  //       });
  //     }
  //   );


  // }
}

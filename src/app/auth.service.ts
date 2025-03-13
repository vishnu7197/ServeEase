import { Injectable } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { UserModel } from './models/UserModel';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CustomAuthService {
  private userSubject = new BehaviorSubject<UserModel | null>(null);
  user$ = this.userSubject.asObservable();
  private roleSubject = new BehaviorSubject<string | null>(null); // Store the token
  role$ = this.roleSubject.asObservable(); // Observable for components

  
  constructor(private auth: AuthService) {
    this.auth.user$.subscribe(user => {
      if (user) {
        const firstName = user.given_name || (user.name ? user.name.split(' ')[0] : '');
        const lastName = user.family_name || (user.name ? user.name.split(' ').slice(1).join(' ') : '');
        const email = user.email || '';

        const userModel: UserModel = { firstName, lastName, email };
        localStorage.setItem('userDetails', JSON.stringify(userModel));
        this.userSubject.next(userModel);
      }
    });

    const savedRole = localStorage.getItem('userRole');
    if (savedRole) {
      this.roleSubject.next(savedRole);
    }
  }

  setUserRole(role: string) {
    localStorage.setItem('userRole', role); // Save role in localStorage
    this.roleSubject.next(role); // Update BehaviorSubject
  }

  getUserRole(): string | null {
    return this.roleSubject.value; // Get current role value
  }
  getUserDetails(): UserModel | null {
    const storedUser = localStorage.getItem('userDetails');
    return storedUser ? JSON.parse(storedUser) : null;
  }
}

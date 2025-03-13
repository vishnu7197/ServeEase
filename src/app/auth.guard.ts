import { CanActivateFn,CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, take, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})

export class AuthGuard implements CanActivate {
  constructor(private auth: AuthService, private router: Router) {
    
  }

  canActivate(): Observable<boolean> {
    return this.auth.isAuthenticated$.pipe(
      take(1), // Take only the latest value
      map(isAuthenticated => {
        if (!isAuthenticated) {
          this.router.navigate(['']); // Redirect if not authenticated
          return false;
        }
        return true;
      })
    );
  }
  
}
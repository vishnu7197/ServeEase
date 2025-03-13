import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { CustomAuthService } from './auth.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root' // Ensures Angular injects this guard properly
})

export class RoleGuard implements CanActivate {
  constructor(private router: Router,private authService:CustomAuthService)  {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {

    const role = this.authService.getUserRole();
    if (role === 'service-center') {
      return true;
    }
    this.router.navigate(['/home']);
    return false;
  }
  
}

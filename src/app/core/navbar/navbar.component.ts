import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { CustomAuthService } from '../../auth.service';
import { VehicleApiCallService } from '../../vehicle-api-call.service';
import { UserModel } from '../../models/UserModel';

@Component({
  selector: 'app-navbar',
  standalone: false,
  
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {
  showLoginPopup: boolean=false;
  userRole:string | null='user';
  user:UserModel | null = null;

  ngOnInit(): void {
    this.getNotifications();
    setInterval(() => {
      this.notifications = [...this.notifications]; // Trigger change detection
    }, 1000); 
    this.authService.role$.subscribe(
      role=>{
        this.userRole=role;
      }
    );

    this.authService.user$.subscribe(
      usr=>{
        this.user=usr;
      }
    );
  }

  userName:any;
  showNotifications = false;
  unreadCount = 1; // Change dynamically based on notifications
  notifications:any[] = [];

  constructor(public auth: AuthService,private router:Router,private authService:CustomAuthService,private _http:VehicleApiCallService) {}

  getTimeAgo(timestamp: number): string {
    const seconds = Math.floor((new Date().getTime() - timestamp) / 1000);

    if (seconds < 60) return `${seconds} sec ago`;
    const minutes = Math.floor(seconds / 60);
    if (minutes < 60) return `${minutes} min ago`;
    const hours = Math.floor(minutes / 60);
    if (hours < 24) return `${hours} hr ago`;
    const days = Math.floor(hours / 24);
    if (days < 7) return `${days} day${days > 1 ? 's' : ''} ago`;
    const weeks = Math.floor(days / 7);
    if (weeks < 4) return `${weeks} week${weeks > 1 ? 's' : ''} ago`;
    const months = Math.floor(days / 30);
    if (months < 12) return `${months} month${months > 1 ? 's' : ''} ago`;
    const years = Math.floor(days / 365);
    return `${years} year${years > 1 ? 's' : ''} ago`;
  }

  getNotifications(){
    this._http.getNotifications().subscribe((result:any)=>{
      this.notifications=result.filter((x:any)=>x.userId==this.user?.email);
      if (this.notifications.length==0) {
        this.unreadCount=0;
      }
      else{
        this.unreadCount=this.notifications.length;
      }
    },(err)=>{
      this.unreadCount=0;
    }
  );
  }
  toggleNotifications() {
    this.showNotifications = !this.showNotifications;
    if (this.showNotifications) {
      this.unreadCount = 0; // Reset unread count when clicked
    }
  }
  
  getSortedNotifications() {
    return this.notifications.sort((a, b) => new Date(b.time).getTime() - new Date(a.time).getTime());
  }
  // login() {
  //   this.auth.loginWithRedirect();
  //   this.router.navigate(['/home'])
  // }

  openLoginPopup() {
    this.showLoginPopup = true;
  }
  
  login(role: string) {
    
    this.showLoginPopup = false;
    this.authService.setUserRole(role);
    this.auth.loginWithRedirect();
    this.getNotifications();
    this.ngOnInit();

    
  }

  logout() {
    localStorage.clear();
    this.auth.logout({ logoutParams:{returnTo: window.location.origin} });
  }
}

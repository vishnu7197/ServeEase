import { Component } from '@angular/core';
import { VehicleApiCallService } from '../vehicle-api-call.service';
import { CustomAuthService } from '../auth.service';
import { UserModel } from '../models/UserModel';

@Component({
  selector: 'app-service-status',
  standalone: false,
  
  templateUrl: './service-status.component.html',
  styleUrl: './service-status.component.css'
})
export class ServiceStatusComponent {

  constructor(private _httpService:VehicleApiCallService,private authService:CustomAuthService){}
  services: any[] = [];
  user:UserModel | null =null;
  
  
  //API call loading and response boiler code
  isLoading: boolean = false;
  message = '';
  isModalVisible: boolean = false;
  modalType: 'success' | 'error' = 'success';
  modalMessage: string = '';
  ngOnInit() {
    this.authService.user$.subscribe(
      userData=> this.user=userData
    );
    this.getServiceStatus();
    
  }

  // Function to get class based on status
  getStatusClass(status: string): string {
    switch (status.toLowerCase()) {
      case 'pending': return 'status-pending';
      case 'in progress': return 'status-inprogress';
      case 'delayed': return 'status-delayed';
      case 'completed': return 'status-completed';
      default: return 'status-default';
    }
  }


  handleModalClose() {
    this.isModalVisible = false;
  }
  getServiceStatus(){
    this.isLoading=true;
    this._httpService.getServiceDetails().subscribe(
      (result:any)=>{ 
        this.isLoading = false; 
        console.log('services-usermail ',this.user?.email);
        this.services=result.filter((x:any)=>x.bookingId==this.user?.email);
        console.log('services-status ',this.services)
      },(err)=>{
          this.isLoading=false;
          this.isModalVisible=true;
          this.modalType='error';
          this.modalMessage='Service is down';
      }
    );
  }

  
}

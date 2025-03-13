import { Component, OnInit } from '@angular/core';
import { VehicleApiCallService } from '../vehicle-api-call.service';
import { CustomAuthService } from '../auth.service';
import { UserModel } from '../models/UserModel';

@Component({
  selector: 'app-service-booking-list',
  standalone: false,
  
  templateUrl: './service-booking-list.component.html',
  styleUrl: './service-booking-list.component.css'
})
export class ServiceBookingListComponent implements OnInit {
  serviceBookings:any[]=[];
  user:UserModel | null =null;
  
  //API call loading and response boiler code
  isLoading: boolean = false;
  message = '';
  isModalVisible: boolean = false;
  modalType: 'success' | 'error' = 'success';
  modalMessage: string = '';

  constructor(private _httpService:VehicleApiCallService,private authService:CustomAuthService) {}

  ngOnInit(): void {
    this.authService.user$.subscribe(
      userData=> this.user=userData
    );
    this.getServiceDetails();
  }

  updateStatus(booking: any) {
    console.log('Updated Status:', booking);
    // Call API to update the status here
    const notificationModel={
      message:'The Status of '+ booking.serviceId+' has moved to '+booking.status,
      userId:booking.bookingId,
      time: Date.now()
    };
    this._httpService.postNotifications(notificationModel).subscribe(
      (result:any)=>{
        if (result.status === 201) {

            setTimeout(() => {
              this.isLoading = false;  
              this.isModalVisible=true;
              this.modalType='success';
              this.modalMessage='Status Changed';
             
            }, 100);
          }
      }
    );
    this.isLoading=true;
    this._httpService.putStatus(booking.id,booking).subscribe(
      (result:any)=>{
        if (result.status === 201) {

            setTimeout(() => {
              this.isLoading = false;  
              this.isModalVisible=true;
              this.modalType='success';
              this.modalMessage='Status Changed';
             
            }, 100);
          }
      }
    );
  }

  getStatusClass(status: string) {
    return {
      'pending': 'status-pending',
      'in progress': 'status-in-progress',
      'delayed': 'status-delayed',
      'completed': 'status-completed'
    }[status] || '';

    
  }

  handleModalClose() {
    this.isModalVisible = false;
  }
  getServiceDetails(){
    this.isLoading=true;
    this._httpService.getServiceDetails().subscribe(
      (result:any)=>{
        this.isLoading = false; 
        this.serviceBookings=result.filter((service:any)=>service.userMail==this.user?.email);
      },(err)=>{
          this.isLoading=false;
          this.isModalVisible=true;
          this.modalType='error';
          this.modalMessage='Service is down';
      }
    );
  }
}

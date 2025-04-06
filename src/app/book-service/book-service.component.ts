import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { VehicleApiCallService } from '../vehicle-api-call.service';
import { UserModel } from '../models/UserModel';
import { CustomAuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-service',
  standalone: false,
  
  templateUrl: './book-service.component.html',
  styleUrl: './book-service.component.css'
})
export class BookServiceComponent implements OnInit {
  user: UserModel | null = null;
  ngOnInit(){
    this.getServiceCenters();
    this.getVehicleDetails();
    this.customAuth.user$.subscribe(userData => {
      this.user = userData;
    });
    

  }
  serviceForm: FormGroup;
  serviceCentreList:any[]=[];
  pincode:string='';
  filteredCenters: any[]=[];
  selectedServiceCenter: string = '';



  //API call loading and response boiler code
  isLoading: boolean = false;
  message = '';
  isModalVisible: boolean = false;
  modalType: 'success' | 'error' = 'success';
  modalMessage: string = '';

  constructor(private fb: FormBuilder,private _httpService:VehicleApiCallService,private customAuth:CustomAuthService,private router:Router) {
    this.serviceForm = this.fb.group({
      vehicleDetails: ['', Validators.required],
      problemDescription: ['', Validators.required],
      customerName: ['', Validators.required],
      pickupPoint: ['', [Validators.required, Validators.pattern('^[0-9]{6}$')]],
      serviceCenter: ['',Validators.required],
      contactNo: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      address: ['']
    });
  }


  isPincodeInvalid() {
    const pincodeControl = this.serviceForm.get('pickupPoint');
    return pincodeControl?.valid && pincodeControl?.value?.length === 6;
  }
  
  // Method to check if a field is invalid
  isFieldInvalid(field: string) {
    return this.serviceForm.get(field)?.invalid && (this.serviceForm.get(field)?.dirty || this.serviceForm.get(field)?.touched);
  }

  handleModalClose() {
    this.isModalVisible = false;
  }
  fnFilterPincode(){
    
    if (this.pincode.trim() === '') {
      this.filteredCenters = [];
      return;
    }

    this.filteredCenters = this.serviceCentreList.filter(center =>
      center.pincodes.split(',').includes(this.pincode.trim())
    );
    console.log('filtered pincodes',this.filteredCenters);
  }

  vehicles:any[]=[];
  getVehicleDetails(){
    this.isLoading=true;
    this._httpService.getVehicleDetails().subscribe(
      (result:any)=>{
        this.isLoading = false; 
        this.vehicles=result.filter((x:any)=>x.userId==this.user?.email);;
      },(err)=>{
          this.isLoading=false;
          this.isModalVisible=true;
          this.modalType='error';
          this.modalMessage='Service is down';
      }
    );
  }

  getServiceCenters(){
    const regexMail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    this._httpService.getServiceCenters().subscribe(
      (result:any)=>{
        this.isLoading = false;
        this.serviceCentreList=result.filter((x:any)=>regexMail.test(x.userMail));
        console.log('Service center',this.serviceCentreList);
      },(err)=>{
          this.isLoading=false;
          this.isModalVisible=true;
          this.modalType='error';
          this.modalMessage='Service is down';
      }
    );
  }
  onSubmit() {
    const serviceFormValue = this.serviceForm.value;
    const timestamp = new Date().toISOString().replace(/[-T:.Z]/g, '').slice(0, 14); // Format: YYYYMMDDHHMMSS
    if (this.serviceForm.valid && this.user?.email) {

      console.log('service mn , vehicle mn',this.serviceCentreList,serviceFormValue.serviceCenter , this.vehicles,serviceFormValue.vehicleDetails);

      let service_Center=this.serviceCentreList.find((x)=>x.id==serviceFormValue.serviceCenter);
      let vehicle_dtls=this.vehicles.find((x)=>x.id==serviceFormValue.vehicleDetails);

      console.log('service , vehicle',service_Center , vehicle_dtls);

      this.isLoading=true;
      const bookServiceModel={
        
          vehicleId:  serviceFormValue.vehicleDetails,
          centerId: serviceFormValue.serviceCenter,
          problemDescription: serviceFormValue.problemDescription,
          customerName: serviceFormValue.customerName,
          pickupPoint: serviceFormValue.pickupPoint,
          serviceId: `SERVICE-${serviceFormValue.contactNo}-${timestamp}`,
          bookingId:this.user.email,
          status:'pending',
          center:service_Center.centerName+','+service_Center.state+','+service_Center.city,
          vehicle:vehicle_dtls.company+','+vehicle_dtls.model,
          userMail:service_Center.userMail,
          costEstimation:0
        
      };
      this._httpService.bookServices(bookServiceModel).subscribe(
        (result: any) => {
          
          console.log('inside post call', result);
          if (result.status === 201) {
            
            setTimeout(() => {
              this.isLoading = false;
              this.isModalVisible=true;
              this.modalType='success';
              this.modalMessage='Service Booked with ID -'+bookServiceModel.serviceId;
              // Add the vehicle to the list
              this.serviceForm.reset();
              this.router.navigate(['/status'])

              // Close the modal programmatically
              // let closeButton = document.querySelector('#addVehicleModal .btn-close') as HTMLElement;
              // closeButton.click();
            }, 100);
          }
        },
        (err) => {
          this.isLoading=false;
          this.isModalVisible=true;
          this.modalType='error';
          this.modalMessage='Service is down';
        }
      );
    
    }
  }
}

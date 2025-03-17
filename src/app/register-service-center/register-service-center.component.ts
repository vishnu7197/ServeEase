import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { VehicleApiCallService } from '../vehicle-api-call.service';
import { UserModel } from '../models/UserModel';
import { CustomAuthService } from '../auth.service';

@Component({
  selector: 'app-register-service-center',
  standalone: false,
  templateUrl: './register-service-center.component.html',
  styleUrls: ['./register-service-center.component.css']
})
export class RegisterServiceCenterComponent implements OnInit {
  serviceCenterForm!: FormGroup;
  isManageModalVisible = false;
  serviceCenters: any[] = [];
  textSubmit='Register';

  
  //API call loading and response boiler code
  isLoading: boolean = false;
  message = '';
  isModalVisible: boolean = false;
  modalType: 'success' | 'error' = 'success';
  modalMessage: string = '';

  user: UserModel | null = null;
  

  constructor(private fb: FormBuilder,private _httpService:VehicleApiCallService,private customAuth:CustomAuthService) {}

  ngOnInit(): void {
    this.customAuth.user$.subscribe(userData => {
      this.user = userData;
    });
    this.serviceCenterForm = this.fb.group({
      centerName: ['', Validators.required],
      licenseNumber: ['', Validators.required],
      vehicleTypes: ['', Validators.required],
      pincodes: ['', [Validators.required, Validators.pattern('^[0-9, ]+$')]] ,      // Allow numbers and commas
      state:['',Validators.required],
      city:['',Validators.required]

    });
  }

  openManageCentersModal() {
    this.isManageModalVisible = true;
    this.fetchServiceCenters();
  }

  closeManageCentersModal() {
    this.isManageModalVisible = false;
  }

  fetchServiceCenters() {
    this.isLoading=true;
    this._httpService.getServiceCenters().subscribe(
      (result:any)=>{
        this.isLoading = false;
        this.serviceCenters=result.filter((x:any)=>x.userMail==this.user?.email);
        console.log('Service center',this.serviceCenters);
      },(err)=>{
          this.isLoading=false;
          this.isModalVisible=true;
          this.modalType='error';
          this.modalMessage='Service is down';
      }
    );
  }

  cancelClickFn(){
    this.serviceCenterForm.reset();
    this.textSubmit='Register';
  }

  editId:any;
  editCenter(center: any) {
    this.editId=center.id;
    this.textSubmit='Edit';
    this.closeManageCentersModal();
    this.serviceCenterForm.patchValue(center);

  }

  deleteCenter(id: number) {
    this.isLoading=true;
    if (confirm('Are you sure you want to delete this service center?')) {
      this._httpService.deleteServiceCenter(id).subscribe((data:any) => {
        this.isLoading=false;
        if(data.status==200)
        {
          
            this.isModalVisible=true;
            this.modalType='success';
            this.modalMessage='Center Deleted';
            this.openManageCentersModal();
            this.cancelClickFn();
            
        }
      },(err)=>{
          this.isLoading=false;
          this.isModalVisible=true;
          this.modalType='error';
          this.modalMessage='Service is down';
      });
    }
  }
  
  handleModalClose() {
    this.isModalVisible = false;
    
  }

  registerCenter(){
    if (this.serviceCenterForm.valid && this.user?.email) {
      const formValue = this.serviceCenterForm.value;
      const payload = {
        centerName:formValue.centerName,
        licenseNumber:formValue.licenseNumber,
        vehicleTypes:formValue.vehicleTypes,
        pincodes:formValue.pincodes,
        state:formValue.state,
        city:formValue.city,
        userMail:this.user?.email

      };
      this.isLoading=true;
      console.log('Form Submitted', this.serviceCenterForm.value);
      this._httpService.registerServiceCenter(payload).subscribe(
        (result: any) => {
          
          console.log('inside post call', result);
          if (result.status === 201) {

            setTimeout(() => {
              this.isLoading = false;  
              this.isModalVisible=true;
              this.modalType='success';
              this.modalMessage='Center Registered';
              // Add the vehicle to the list
              this.serviceCenterForm.reset();

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

  putCenter(){
    if (this.serviceCenterForm.valid && this.user?.email) {
      const formValue = this.serviceCenterForm.value;
      const payload = {
        centerName:formValue.centerName,
        licenseNumber:formValue.licenseNumber,
        vehicleTypes:formValue.vehicleTypes,
        pincodes:formValue.pincodes,
        state:formValue.state,
        city:formValue.city,
        userMail:this.user?.email

      };
      this.isLoading=true;
      console.log('Form Submitted', this.serviceCenterForm.value);
      this._httpService.putServiceCenter(this.editId,payload).subscribe(
        (result: any) => {
          this.isLoading = false;  
          console.log('inside post call', result);
          if (result.status === 200) {

            setTimeout(() => {
              this.isModalVisible=true;
              this.modalType='success';
              this.modalMessage='Center Edited';
              // Add the vehicle to the list
              this.serviceCenterForm.reset();

              // Close the modal programmatically
              // let closeButton = document.querySelector('#addVehicleModal .btn-close') as HTMLElement;
              // closeButton.click();
            }, 100);
          }else{
            this.isModalVisible=true;
            this.modalType='error';
            this.modalMessage='Error Code '+result.status;
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
  onSubmit() {
    if(this.textSubmit=='Register'){
      this.registerCenter();
    }else{
      this.putCenter();
    }
    
  }
}

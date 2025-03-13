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

  handleModalClose() {
    this.isModalVisible = false;
    
  }

  onSubmit() {
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
}

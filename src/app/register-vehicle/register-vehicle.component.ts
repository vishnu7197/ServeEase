import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { VehicleApiCallService } from '../vehicle-api-call.service';

@Component({
  selector: 'app-register-vehicle',
  standalone: false,
  
  templateUrl: './register-vehicle.component.html',
  styleUrl: './register-vehicle.component.css'
})
export class RegisterVehicleComponent {
  vehicleForm: FormGroup;

  //API call loading and response boiler code
  isLoading: boolean = false;
  message = '';
  isModalVisible: boolean = false;
  modalType: 'success' | 'error' = 'success';
  modalMessage: string = '';


  constructor(private fb: FormBuilder,private _registerVehicleService:VehicleApiCallService) {
    this.vehicleForm = this.fb.group({
      company: ['', Validators.required],
      model: ['', Validators.required],
      registrationNo: ['', Validators.required],
      ownerName: ['', Validators.required],
      contactNo: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      manufacturedYear: ['', [Validators.required, Validators.min(1900), Validators.max(new Date().getFullYear())]]
    });
  }

  successFlg=false;
  onSubmit(): void {
    if (this.vehicleForm.valid) {
      const formValue = this.vehicleForm.value; // Get form values

    // Create new vehicle object in required JSON format
    const newVehicle = {
      type: formValue.company,  // Mapping company to type
      registration: formValue.registrationNo,
      owner_name: formValue.ownerName,
      manufact_year: formValue.manufacturedYear
    };
      console.log('Form Submitted', newVehicle);
      this._registerVehicleService.postRegisterVehicle(this.vehicleForm.value).subscribe(
        (result:any)=>{
          this.isLoading=true;
          console.log('inside post call',result);
          if(result!=undefined){
            
            this.message=result.message; 
            setTimeout(() => (this.isLoading = false), 1000);           
          }
        },
        (err)=>{
          this.message='Service is down';
        }
      );
      // Handle login logic here
    }
  }

}

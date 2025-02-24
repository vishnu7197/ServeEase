import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { VehicleApiCallService } from '../vehicle-api-call.service';


@Component({
  selector: 'app-manage-rides',
  standalone: false,

  templateUrl: './manage-rides.component.html',
  styleUrl: './manage-rides.component.css'
})
export class ManageRidesComponent {
  vehicleForm: FormGroup;
  vehicles: any[] = []; // Array to store added vehicles
  showAddVehicle=false;
  displayStyle='none';

  //API call loading and response boiler code
  isLoading: boolean = false;
  message = '';
  isModalVisible: boolean = false;
  modalType: 'success' | 'error' = 'success';
  modalMessage: string = '';

  constructor(private fb: FormBuilder, private _httpService: VehicleApiCallService) {
    this.vehicleForm = this.fb.group({
      company: ['', Validators.required],
      model: ['', Validators.required],
      registrationNo: ['', Validators.required],
      ownerName: ['', Validators.required],
      contactNo: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      manufacturedYear: ['', [Validators.required, Validators.min(1900), Validators.max(new Date().getFullYear())]]
    });
  }

  fnShowAddVehicle(){
    this.showAddVehicle=true;
    this.displayStyle='block';
  }
  fnCloseAddVehicle(){
    this.showAddVehicle=false;
    this.displayStyle='none';
  }
  successFlg = false;
  onSubmit(): void {
    if (this.vehicleForm.valid) {
      console.log('Form Submitted', this.vehicleForm.value);
      this._httpService.postRegisterVehicle(this.vehicleForm.value).subscribe(
        (result: any) => {
          this.isLoading = true;
          console.log('inside post call', result);
          if (result != undefined) {

            this.message = result.message;
            setTimeout(() => {
              this.isLoading = false  
              
              // Add the vehicle to the list
              this.vehicles.push(this.vehicleForm.value);
              this.vehicleForm.reset();

              // Close the modal programmatically
              let closeButton = document.querySelector('#addVehicleModal .btn-close') as HTMLElement;
              closeButton.click();
            }, 1000);
          }
        },
        (err) => {
          this.message = 'Service is down';
        }
      );
    }
  }
}

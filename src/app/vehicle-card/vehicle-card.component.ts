import { Component, EventEmitter, Input, Output } from '@angular/core';
import { VehicleApiCallService } from '../vehicle-api-call.service';

@Component({
  selector: 'app-vehicle-card',
  standalone: false,
  
  templateUrl: './vehicle-card.component.html',
  styleUrl: './vehicle-card.component.css'
})
export class VehicleCardComponent {
@Input() vehicle:any;
@Output() onEdit = new EventEmitter<any>();
@Output() onDelete = new EventEmitter<any>();
showDeleteModal: boolean = false;
selectedVehicle: any = null;

//API call loading and response boiler code
isLoading: boolean = false;
message = '';
isModalVisible: boolean = false;
modalType: 'success' | 'error' = 'success';
modalMessage: string = '';

constructor(private _service: VehicleApiCallService) {}


get vehicleImage(): string {
  return this.vehicle.type.toLowerCase() === 'car' 
    ? 'assets/img/car-icon.png'  
    : 'assets/img/bike-icon.png'; 
}

handleModalClose() {
  this.isModalVisible = false;
  
}

editVehicle(vehicle: any) {
  this.onEdit.emit(vehicle);
}

// Open delete confirmation modal
openDeleteModal(vehicle: any) {
  this.selectedVehicle = vehicle;
  this.showDeleteModal = true;
}

// Close delete modal
closeDeleteModal() {
  this.showDeleteModal = false;
  this.selectedVehicle = null;
}

deleteVehicle() {
  this.isLoading=true;
  if (!this.selectedVehicle) return;


  this._service.deleteRides(this.selectedVehicle.id).subscribe(
    (result:any) => {
      console.log('inside post call', result);
          
        if(result.status===200){
          setTimeout(() => {
            this.isLoading = false;  
            this.isModalVisible=true;
            this.modalType='success';
            this.modalMessage='Ride Deleted';
            this.closeDeleteModal();
            this.onDelete.emit();
            // Add the vehicle to the list

            // Close the modal programmatically
            // let closeButton = document.querySelector('#addVehicleModal .btn-close') as HTMLElement;
            // closeButton.click();
          }, 100);
        }
      else{
        this.isLoading=false;
        this.isModalVisible=true;
        this.modalType='error';
        this.modalMessage='Service is down';
      }
            
          
    },
    (error) => {
      this.isLoading=false;
      this.isModalVisible=true;
      this.modalType='error';
      this.modalMessage='Service is down';
    }
  );
}
}

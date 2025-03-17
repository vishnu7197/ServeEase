import { Component } from '@angular/core';
import { VehicleApiCallService } from '../vehicle-api-call.service';
import { CustomAuthService } from '../auth.service';

@Component({
  selector: 'app-view-centers',
  standalone: false,
  
  templateUrl: './view-centers.component.html',
  styleUrl: './view-centers.component.css'
})
export class ViewCentersComponent {

  constructor(private _httpService: VehicleApiCallService, private authService: CustomAuthService) { }

  services: any[] = [];

  //API call loading and response boiler code
  isLoading: boolean = false;
  message = '';
  isModalVisible: boolean = false;
  modalType: 'success' | 'error' = 'success';
  modalMessage: string = '';

  handleModalClose() {
    this.isModalVisible = false;
  }

}

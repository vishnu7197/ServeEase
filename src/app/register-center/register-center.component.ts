import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { VehicleApiCallService } from '../vehicle-api-call.service';

@Component({
  selector: 'app-register-center',
  standalone: false,
  
  templateUrl: './register-center.component.html',
  styleUrl: './register-center.component.css'
})
export class RegisterCenterComponent {
  isLoading: boolean = false;
  registerForm: FormGroup;
  message='';
  isModalVisible: boolean = false;
  modalType: 'success' | 'error' = 'success';
  modalMessage: string = '';
  constructor(private fb: FormBuilder, private _registerService: VehicleApiCallService) {
    this.registerForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      phone: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
    });
  }
  
  handleModalClose() {
    this.isModalVisible = false;
  }

  
    successFlg=false;
    onSubmit(): void {
      if (this.registerForm.valid) {
        console.log('Form Submitted', this.registerForm.value);
        this._registerService.postRegisterUser(this.registerForm.value).subscribe(
          (result:any)=>{
            this.isLoading=true;
            console.log('inside post call',result);
            if(result!=undefined){
              
              this.message=result.message; 
              setTimeout(() => (this.isLoading = false), 1000);           
            }
          }
        );
        // Handle login logic here
      }
    }
}

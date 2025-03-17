import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { VehicleApiCallService } from '../vehicle-api-call.service';
import { AuthService } from '@auth0/auth0-angular';
import { CustomAuthService } from '../auth.service';
import { UserModel } from '../models/UserModel';


@Component({
  selector: 'app-manage-rides',
  standalone: false,

  templateUrl: './manage-rides.component.html',
  styleUrl: './manage-rides.component.css'
})
export class ManageRidesComponent implements OnInit{
  vehicleForm: FormGroup;
  vehicles: any[] = []; // Array to store added vehicles
  showAddVehicle=false;
  displayStyle='none';
  currentYear = new Date().getFullYear(); 
  user:UserModel | null =null;
  btnText='Add';

  //API call loading and response boiler code
  isLoading: boolean = false;
  message = '';
  isModalVisible: boolean = false;
  modalType: 'success' | 'error' = 'success';
  modalMessage: string = '';

  ngOnInit(): void {
    
      this.getVehicleDetails();
      this.custAuth.user$.subscribe(
        userData=>{
          this.user=userData;
        }
      );

    
  }
  constructor(private fb: FormBuilder, private _httpService: VehicleApiCallService,private auth:AuthService,private custAuth:CustomAuthService) {
    this.vehicleForm = this.fb.group({
      type: ['car', Validators.required], // Default selection
      company: ['', Validators.required],
      model: ['', Validators.required],
      registrationNo: ['', Validators.required],
      ownerName: ['', Validators.required],
      manufacturedYear: ['', [Validators.required, Validators.pattern('^[0-9]*$'), Validators.min(1900), Validators.max(this.currentYear)]]
    });
  }

  handleModalClose() {
    this.isModalVisible = false;
    this.getVehicleDetails();
    this.fnCloseAddVehicle();
  }

  getVehicleDetails(){
    this.isLoading=true;
    this._httpService.getVehicleDetails().subscribe(
      (result:any)=>{
        this.isLoading = false; 
        this.vehicles=result.filter((x:any)=>x.userId==this.user?.email);
      },(err)=>{
          this.isLoading=false;
          this.isModalVisible=true;
          this.modalType='error';
          this.modalMessage='Service is down';
      }
    );
  }

  editVehicle:any={};

  showEdit(newVehicle:any){
    this.editVehicle=newVehicle;
    const vehicle = {
      model: newVehicle.model,
      type: newVehicle.type,  // Mapping type to company
      registrationNo: newVehicle.registration,
      ownerName: newVehicle.owner_name,
      manufacturedYear: newVehicle.manufact_year,
      company: newVehicle.company,
      userId: newVehicle.userId
    };
    this.vehicleForm.patchValue(vehicle);
    this.fnShowAddVehicle('Edit');

  }

  fnShowAddVehicle(text:string){
    this.btnText=text;
    this.showAddVehicle=true;
    this.displayStyle='block';
  }
  fnCloseAddVehicle(){
    this.showAddVehicle=false;
    this.displayStyle='none';
    this.vehicleForm.reset(); // Reset form when closing modal
  }

  successFlg = false;
  onSubmit(): void {
    if (this.vehicleForm.valid && this.user?.email) {
      this.isLoading = true;
      const formValue = this.vehicleForm.value; // Get form values

    // Create new vehicle object in required JSON format
    const newVehicle = {
      model:formValue.model,
      type: formValue.type,  // Mapping company to type
      registration: formValue.registrationNo,
      owner_name: formValue.ownerName,
      manufact_year: formValue.manufacturedYear,
      company:formValue.company,
      userId:this.user.email
    };
      console.log('Form Submitted', this.vehicleForm.value);
      if (this.btnText=='Edit') {
        this._httpService.putRegisterVehicle(newVehicle,this.editVehicle.id).subscribe(
          (result: any) => {
            
            console.log('inside put call', result);
            if (result.status === 200) {
  
              setTimeout(() => {
                this.isLoading = false;  
                this.isModalVisible=true;
                this.modalType='success';
                this.modalMessage='Ride '+this.btnText+'ed';
                // Add the vehicle to the list
                this.vehicleForm.reset();
  
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
      else{
        this._httpService.postRegisterVehicle(newVehicle).subscribe(
          (result: any) => {
            
            console.log('inside post call', result);
            if (result.status === 201) {
  
              setTimeout(() => {
                this.isLoading = false;  
                this.isModalVisible=true;
                this.modalType='success';
                this.modalMessage='Ride '+this.btnText+'ed';
                // Add the vehicle to the list
                this.vehicleForm.reset();
  
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
}

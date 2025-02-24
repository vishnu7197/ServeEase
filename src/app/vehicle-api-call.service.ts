import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VehicleApiCallService {
  url='test';
  integrationFlag=false;
  constructor(private _http:HttpClient) { }

  postRegisterUser(payload:any){
    if(this.integrationFlag){
      return this._http.post(this.url,payload);
    }
    else
    {
      return this._http.get('assets/test json/register.json');
    }

  }

  postRegisterVehicle(payload:any){
    if(this.integrationFlag){
      return this._http.post(this.url,payload);
    }
    else
    {
      return this._http.get('assets/test json/register.json');
    }

  }
}

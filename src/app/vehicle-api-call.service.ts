import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '@auth0/auth0-angular';

@Injectable({
  providedIn: 'root'
})
export class VehicleApiCallService {
  url='https://67d023b4823da0212a84c7a8.mockapi.io/'; 
  integrationFlag=true;
  constructor(private _http:HttpClient,private auth:AuthService) { }

  

  

  postNotifications(payload:any){
    if(this.integrationFlag){
      return this._http.post(this.url+'notifications',payload, { observe: 'response' });
    }
    else
    {
      return this._http.get('assets/test json/register.json');
    }
  }

  getNotifications(){
    if(this.integrationFlag){
      return this._http.get(this.url+'notifications');
    }
    else
    {
      return this._http.get('assets/test json/register.json');
    }
  }
  putStatus(id:string,payload:any){
    if(this.integrationFlag){
      return this._http.put(this.url+'book_services/'+id,payload, { observe: 'response' });
    }
    else
    {
      return this._http.get('assets/test json/register.json');
    }
  }
  getServiceDetails(){
    if(this.integrationFlag){
      return this._http.get(this.url+'book_services');
    }
    else
    {
      return this._http.get('assets/test json/register.json');
    }
  }
  getUserName():any{
    let userName:any='';
    this.auth.user$.subscribe(user => {
      if (user) {
        userName = user.name || user.nickname || user.email; // Get name, or fallback to nickname/email
        // localStorage.setItem('userName', userName?.toString()); // Store in localStorage
      }
    });
    console.log('userName :',userName);
    return userName;
  }

  bookServices(payload:any){
    if(this.integrationFlag){
      return this._http.post(this.url+'book_services',payload, { observe: 'response' });
    }
    else
    {
      return this._http.get('assets/test json/register.json');
    }
  }
  getServiceCenters(){
    if(this.integrationFlag){
      return this._http.get(this.url+'service_centers');
    }
    else
    {
      return this._http.get('assets/test json/register.json');
    }
  }

  registerServiceCenter(payload:any){
    if(this.integrationFlag){
      return this._http.post(this.url+'service_centers',payload, { observe: 'response' });
    }
    else
    {
      return this._http.get('assets/test json/register.json');
    }

  }
  deleteRides(id:any){
    if(this.integrationFlag){
      return this._http.delete(this.url+'vehicle_list/'+id,{ observe: 'response' });
    }
    else
    {
      return this._http.get('assets/test json/register.json');
    }
  }

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
      return this._http.post(this.url+'vehicle_list',payload, { observe: 'response' });
    }
    else
    {
      return this._http.get('assets/test json/register.json');
    }

  }

  getVehicleDetails(){
    if(this.integrationFlag){
      // return this._http.post(this.url,payload);
      return this._http.get(this.url+'vehicle_list');

    }
    else
    {
      return this._http.get('assets/test json/vehicles.json');
    }
  }
}

import { Component } from '@angular/core';
import { VehicleApiCallService } from '../vehicle-api-call.service';
import { CustomAuthService } from '../auth.service';
import { UserModel } from '../models/UserModel';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-service-status',
  standalone: false,
  
  templateUrl: './service-status.component.html',
  styleUrl: './service-status.component.css'
})
export class ServiceStatusComponent {

  constructor(private _httpService:VehicleApiCallService,private authService:CustomAuthService){}
  services: any[] = [];
  user:UserModel | null =null;
  
  
  //API call loading and response boiler code
  isLoading: boolean = false;
  message = '';
  isModalVisible: boolean = false;
  modalType: 'success' | 'error' = 'success';
  modalMessage: string = '';
  ngOnInit() {
    this.authService.user$.subscribe(
      userData=> this.user=userData
    );
    this.getServiceStatus();
    
  }

  // Function to get class based on status
  getStatusClass(status: string): string {
    switch (status.toLowerCase()) {
      case 'pending': return 'status-pending';
      case 'in progress': return 'status-inprogress';
      case 'delayed': return 'status-delayed';
      case 'completed': return 'status-completed';
      default: return 'status-default';
    }
  }

  downloadPDF(service: any) {
    const doc = new jsPDF();
  
    // Load logo image
    const img = new Image();
    img.src = 'assets/img/mechanic.png';  // Ensure your logo is placed in the 'assets' folder
    img.onload = () => {
      // Resize logo and add it
      const logoWidth = 20;  // Adjust the width
      const logoHeight = 20; // Adjust the height
      const startX = 65;  // Adjust X position for centering
      const startY = 10;  // Adjust Y position
  
      doc.addImage(img, 'PNG', startX, startY, logoWidth, logoHeight);
  
      // Add "ServeEase" text next to logo
      doc.setFontSize(16);
      doc.setFont('helvetica', 'bold');  
      doc.text("ServeEase", startX + logoWidth + 5, startY + 15);  
  
      // Title below logo
      doc.setFontSize(14);
      doc.setFont('helvetica', 'bold');
      doc.text("Service Completion Report", 60, 40);
  
      // Service Details
      doc.setFontSize(12);
      doc.setFont('helvetica', 'normal');
      doc.text(`Service ID: ${service.serviceId}`, 20, 60);
      doc.text(`Customer Name: ${service.customerName}`, 20, 70);
      doc.text(`Problem: ${service.problemDescription}`, 20, 80);
      doc.text(`Pickup Point: ${service.pickupPoint}`, 20, 90);
      doc.text(`Service Center: ${service.center}`, 20, 100);
      doc.text(`Vehicle: ${service.vehicle}`, 20, 110);
      doc.text(`Status: ${service.status.toUpperCase()}`, 20, 120);
      doc.text(`Cost estimation: INR ${service.estimatedCost}`, 20, 130);
  
      // Footer
      doc.setFontSize(10);
      doc.setFont('helvetica', 'italic');
      doc.text("Thank you for using ServeEase!", 60, 140);

      // Signature section
      doc.setFontSize(10);
      doc.setFont('helvetica', 'italic');
      doc.text('Digitally signed', 150, 180);

      doc.setFontSize(12);
      doc.setFont('helvetica', 'bold');
      doc.text('Devambika VH', 150, 190);

      doc.setFontSize(10);
      doc.setFont('helvetica', 'normal');
      doc.text('Quality Head', 150, 200);
  
      // Download PDF
      doc.save(`Service_${service.serviceId}.pdf`);
    };
  }
  

  handleModalClose() {
    this.isModalVisible = false;
  }
  getServiceStatus(){
    this.isLoading=true;
    this._httpService.getServiceDetails().subscribe(
      (result:any)=>{ 
        this.isLoading = false; 
        console.log('services-usermail ',this.user?.email);
        this.services=result.filter((x:any)=>x.bookingId==this.user?.email);
        console.log('services-status ',this.services)
      },(err)=>{
          this.isLoading=false;
          this.isModalVisible=true;
          this.modalType='error';
          this.modalMessage='Service is down';
      }
    );
  }

  
}

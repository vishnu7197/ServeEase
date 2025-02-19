import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-loading-modal',
  standalone: false,
  
  templateUrl: './loading-modal.component.html',
  styleUrl: './loading-modal.component.css'
})
export class LoadingModalComponent {
  @Input() isVisible: boolean = false;
}

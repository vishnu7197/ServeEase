import { Component,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-message-display-modal',
  standalone: false,
  
  templateUrl: './message-display-modal.component.html',
  styleUrl: './message-display-modal.component.css'
})
export class MessageDisplayModalComponent {
  @Input() isVisible: boolean = false;
  @Input() type: 'success' | 'error' = 'success';
  @Input() message: string = '';
  @Output() onClose = new EventEmitter<void>();

  closeModal() {
    this.onClose.emit();
  }
}

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageDisplayModalComponent } from './message-display-modal.component';

describe('MessageDisplayModalComponent', () => {
  let component: MessageDisplayModalComponent;
  let fixture: ComponentFixture<MessageDisplayModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MessageDisplayModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MessageDisplayModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterServiceCenterComponent } from './register-service-center.component';

describe('RegisterServiceCenterComponent', () => {
  let component: RegisterServiceCenterComponent;
  let fixture: ComponentFixture<RegisterServiceCenterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegisterServiceCenterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterServiceCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

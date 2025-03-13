import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupServiceCenterComponent } from './signup-service-center.component';

describe('SignupServiceCenterComponent', () => {
  let component: SignupServiceCenterComponent;
  let fixture: ComponentFixture<SignupServiceCenterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SignupServiceCenterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignupServiceCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

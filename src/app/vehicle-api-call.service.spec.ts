import { TestBed } from '@angular/core/testing';

import { VehicleApiCallService } from './vehicle-api-call.service';

describe('VehicleApiCallService', () => {
  let service: VehicleApiCallService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VehicleApiCallService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { AddressStepHandlerService } from './address-step-handler.service';

describe('AddressStepHandlerService', () => {
  let service: AddressStepHandlerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddressStepHandlerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

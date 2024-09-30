import { TestBed } from '@angular/core/testing';

import { ConfirmationStepHandlerService } from './confirmation-step-handler.service';

describe('ConfirmationStepHandlerService', () => {
  let service: ConfirmationStepHandlerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConfirmationStepHandlerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

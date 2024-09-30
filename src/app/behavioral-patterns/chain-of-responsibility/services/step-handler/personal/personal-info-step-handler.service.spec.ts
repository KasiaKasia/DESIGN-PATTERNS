import { TestBed } from '@angular/core/testing';

import { PersonalInfoStepHandlerService } from './personal-info-step-handler.service';

describe('PersonalInfoStepHandlerService', () => {
  let service: PersonalInfoStepHandlerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PersonalInfoStepHandlerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { FormService } from '../form-for-intermediate-interface/form-for-intermediate-interface.service';

describe('FormService', () => {
  let service: FormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

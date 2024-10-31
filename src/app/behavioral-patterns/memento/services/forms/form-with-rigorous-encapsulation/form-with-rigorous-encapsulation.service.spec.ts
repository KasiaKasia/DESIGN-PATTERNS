import { TestBed } from '@angular/core/testing';

import { FormWithRigorousEncapsulationService } from './form-with-rigorous-encapsulation.service';

describe('FormWithRigorousEncapsulationService', () => {
  let service: FormWithRigorousEncapsulationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormWithRigorousEncapsulationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { TypestructureService } from './typestructure.service';

describe('TypestructureService', () => {
  let service: TypestructureService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TypestructureService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

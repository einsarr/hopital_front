import { TestBed } from '@angular/core/testing';

import { TypelitService } from './typelit.service';

describe('TypelitService', () => {
  let service: TypelitService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TypelitService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

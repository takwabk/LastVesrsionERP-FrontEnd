import { TestBed } from '@angular/core/testing';

import { AgriService } from './agri.service';

describe('AgriService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AgriService = TestBed.get(AgriService);
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { Intercept } from './intercept.service';

describe('Intercept', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Intercept = TestBed.get(Intercept);
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { GlassifyService } from './glassify.service';

describe('GlassifyService', () => {
  let service: GlassifyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GlassifyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

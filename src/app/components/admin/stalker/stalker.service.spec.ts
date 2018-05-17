import { TestBed, inject } from '@angular/core/testing';

import { StalkerService } from './stalker.service';

describe('StalkerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StalkerService]
    });
  });

  it('should be created', inject([StalkerService], (service: StalkerService) => {
    expect(service).toBeTruthy();
  }));
});

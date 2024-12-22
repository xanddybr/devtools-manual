import { TestBed } from '@angular/core/testing';

import { ServiceLinksService } from './service-links.service';

describe('ServiceLinksService', () => {
  let service: ServiceLinksService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceLinksService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

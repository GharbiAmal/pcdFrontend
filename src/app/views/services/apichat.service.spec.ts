import { TestBed } from '@angular/core/testing';

import { ApichatService } from './apichat.service';

describe('ApichatService', () => {
  let service: ApichatService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApichatService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

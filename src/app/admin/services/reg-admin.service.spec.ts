import { TestBed } from '@angular/core/testing';

import { RegAdminService } from './reg-admin.service';

describe('RegAdminService', () => {
  let service: RegAdminService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegAdminService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

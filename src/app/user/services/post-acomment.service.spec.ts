import { TestBed } from '@angular/core/testing';

import { PostAcommentService } from './post-acomment.service';

describe('PostAcommentService', () => {
  let service: PostAcommentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostAcommentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { SimpleUploadService } from './simple-upload.service';

describe('SimpleUploadService', () => {
  let service: SimpleUploadService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SimpleUploadService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

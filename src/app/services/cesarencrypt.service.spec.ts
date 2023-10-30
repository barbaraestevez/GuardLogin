import { TestBed } from '@angular/core/testing';

import { CesarencryptService } from './cesarencrypt.service';

describe('CesarencryptService', () => {
  let service: CesarencryptService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CesarencryptService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

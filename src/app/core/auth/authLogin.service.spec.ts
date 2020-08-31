import { TestBed } from '@angular/core/testing';

import { AuthLoginService } from './authLogin.service';

describe('AuthLoginService', () => {
  let service: AuthLoginService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthLoginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

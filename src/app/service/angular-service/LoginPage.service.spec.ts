import { TestBed } from '@angular/core/testing';

import { LoginPageService } from './LoginPage.service';

describe('AngularService', () => {
  let service: LoginPageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginPageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('function call currentUserValue', () => {
    expect(service.currentUserValue).toEqual('');
  });
  it('function call login', () => {
    expect(service.login('test','test')).toBeTruthy();
  });
  it('function call getUserDetail', () => {
    expect(service.getUserDetail()).toBeTruthy();
  });
  it('function call logout', () => {
    expect(service.logout()).toBeUndefined();
  });
  it('function call register', () => {
    expect(service.register([])).toBeTruthy();
  });
});

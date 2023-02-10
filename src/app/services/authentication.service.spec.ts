import { TestBed } from '@angular/core/testing';

import { AuthenticationService } from './authentication.service';

describe('AuthenticationService', () => {
  let service: AuthenticationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthenticationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be able to login user', () => {
    let user_name = 'testuser123', password = '123456';
    if(typeof user_name==='string' && typeof password ==='string'){
      expect(service.loginUser(user_name, password)).toBeTrue();
    }else{
      expect(service.loginUser(user_name, password)).toBeFalse();
    }
  });

  it('should be able to authenticate user', () => {
    expect(service.userAuthenticated).toBeTruthy();
  });

  it('should be able to logout user', () => {
    expect(service.logoutUser).toBeTruthy();
  });

});

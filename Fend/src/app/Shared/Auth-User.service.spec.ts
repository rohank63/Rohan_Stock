/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AuthUserService } from './Auth-User.service';

describe('Service: AuthUser', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthUserService]
    });
  });

  it('should ...', inject([AuthUserService], (service: AuthUserService) => {
    expect(service).toBeTruthy();
  }));
});

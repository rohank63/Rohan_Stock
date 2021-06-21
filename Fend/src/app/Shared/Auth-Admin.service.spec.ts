/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AuthAdminService } from './Auth-Admin.service';

describe('Service: AuthAdmin', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthAdminService]
    });
  });

  it('should ...', inject([AuthAdminService], (service: AuthAdminService) => {
    expect(service).toBeTruthy();
  }));
});

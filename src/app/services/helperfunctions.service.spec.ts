import { TestBed } from '@angular/core/testing';

import { HelperfunctionsService } from './helperfunctions.service';

describe('HelperfunctionsService', () => {
  let service: HelperfunctionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HelperfunctionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return error/success message', ()=>{
    let success_notification = service.showSuccessToUser('This is a success message');
    expect(success_notification).toBeTruthy();

    let error_notification  = service.showErrorToUser('This is an error message');
    expect(error_notification).toBeTruthy();
  })
});

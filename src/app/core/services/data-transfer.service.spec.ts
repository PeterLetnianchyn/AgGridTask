import {async, inject, TestBed} from '@angular/core/testing';

// Other imports
import {DataTransferService} from './data-transfer.service';

describe('DataTransferService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DataTransferService],
    });
  });
  it('should be created', inject([DataTransferService], (service: DataTransferService) => {
    expect(service).toBeTruthy();
  }));


  it('notifyHeaderCheckbox if value true', async(
    inject([DataTransferService], (service: DataTransferService) => {
      service.notifyObservable$.subscribe((res) => {
        expect(res).toEqual(30);
      });
      service.notifyHeaderCheckbox(30);
    })
  ));
});

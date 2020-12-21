import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import {VideoService} from '../../../core/services/video.service';
import {DataTransferService} from '../../../core/services/data-transfer.service';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let updateService: DataTransferService;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderComponent ],
      providers: [DataTransferService],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    updateService = TestBed.inject(DataTransferService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('#toggleSelection: should toggle visibility of checkbox column and resize columns', () => {
    const toggleSpy = spyOn(component.params.columnApi, 'setColumnVisible');
    component.toggleSelection(true);
    expect(toggleSpy).toHaveBeenCalledWith('checkbox', true);
    expect(toggleSpy).not.toHaveBeenCalledWith('checkbox', false);
    component.toggleSelection(false);
    expect(toggleSpy).toHaveBeenCalledWith('checkbox', false);
  });

  it('#ngOnInit: should return data from update service', () => {
    component.ngOnInit();
    const notify = spyOn(updateService.notifyObservable$, 'subscribe');
    expect(notify).toHaveBeenCalled();
  });
});

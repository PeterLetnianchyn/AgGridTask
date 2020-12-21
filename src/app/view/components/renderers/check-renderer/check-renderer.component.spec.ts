import {TestBed, async, ComponentFixture} from '@angular/core/testing';
import {CommonModule} from '@angular/common';
import {CheckRendererComponent} from './check-renderer';
import {mockVideo} from '../../../../core/testing-mock.spec';
import {DataTransferService} from '../../../../core/services/data-transfer.service';

describe('LinkRendererComponent', () => {
  let component: CheckRendererComponent;
  let fixture: ComponentFixture<CheckRendererComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CommonModule],
      declarations: [CheckRendererComponent],
      providers: [DataTransferService],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckRendererComponent);
    component = fixture.componentInstance;
    // fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should (agInit)`, () => {
    expect(component.params).toEqual(undefined);
    const expectedValueParams = mockVideo;
    component.agInit(expectedValueParams);
    expect(component.params).toEqual(expectedValueParams);
  });

  it('should return (refresh()) ', () => {
    spyOn(component, 'refresh').and.callThrough();
    const expectedValue = false;
    component.refresh();
    expect(component.refresh()).toEqual(expectedValue);
  });
  it('#isSelected: should return true if the node with given id is selected and false in other case', () => {
    expect(component.isSelected(mockVideo.id.videoId)).toBeFalse();
    component.toggleRow(true, mockVideo.id.videoId);
    expect(component.isSelected(mockVideo.id.videoId)).toBeTrue();
    component.toggleRow(false, mockVideo.id.videoId);
    expect(component.isSelected(mockVideo.id.videoId)).toBeFalse();
  });
});

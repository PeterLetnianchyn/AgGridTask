import {TestBed, async, ComponentFixture} from '@angular/core/testing';
import {CommonModule} from '@angular/common';
import {LinkRendererComponent} from './link-renderer';
import {mockVideo, mockVideoWithData} from '../../../../core/testing-mock.spec';


describe('LinkRenderer', () => {
  let component: LinkRendererComponent;
  let fixture: ComponentFixture<LinkRendererComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CommonModule],
      declarations: [LinkRendererComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkRendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should (agInit)', () => {
    expect(component.params).toEqual(undefined);
    expect(component.link).toEqual(undefined);
    expect(component.text).toEqual(undefined);
    const expectedValueParams = mockVideoWithData;
    component.agInit(expectedValueParams);
    expect(component.params).toEqual(expectedValueParams);
    expect(component.link).toEqual('https://www.youtube.com/watch?v=' + expectedValueParams.data.id.videoId);
    expect(component.text).toEqual(expectedValueParams.data.snippet.title);
  });

  it('should return (refresh()) ', () => {
    spyOn(component, 'refresh').and.callThrough();
    const expectedValue = false;
    component.refresh();
    expect(component.refresh()).toEqual(expectedValue);
  });
});

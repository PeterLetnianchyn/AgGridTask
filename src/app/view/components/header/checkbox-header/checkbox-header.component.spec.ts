import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckboxHeaderComponent } from './checkbox-header.component';
import {DataTransferService} from '../../../../core/services/data-transfer.service';

describe('CheckboxHeaderComponent', () => {
  let component: CheckboxHeaderComponent;
  let fixture: ComponentFixture<CheckboxHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckboxHeaderComponent ],
      providers: [DataTransferService],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckboxHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddmeetingFormComponent } from './addmeeting-form.component';

describe('AddmeetingFormComponent', () => {
  let component: AddmeetingFormComponent;
  let fixture: ComponentFixture<AddmeetingFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddmeetingFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddmeetingFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

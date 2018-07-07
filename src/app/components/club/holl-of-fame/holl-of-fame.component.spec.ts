import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HollOfFameComponent } from './holl-of-fame.component';

describe('HollOfFameComponent', () => {
  let component: HollOfFameComponent;
  let fixture: ComponentFixture<HollOfFameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HollOfFameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HollOfFameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

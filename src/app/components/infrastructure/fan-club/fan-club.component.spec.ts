import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FanClubComponent } from './fan-club.component';

describe('FanClubComponent', () => {
  let component: FanClubComponent;
  let fixture: ComponentFixture<FanClubComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FanClubComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FanClubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

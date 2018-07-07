import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperLeagueComponent } from './super-league.component';

describe('SuperLeagueComponent', () => {
  let component: SuperLeagueComponent;
  let fixture: ComponentFixture<SuperLeagueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuperLeagueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperLeagueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

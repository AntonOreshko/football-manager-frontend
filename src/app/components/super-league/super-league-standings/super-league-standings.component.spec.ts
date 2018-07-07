import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperLeagueStandingsComponent } from './super-league-standings.component';

describe('SuperLeagueStandingsComponent', () => {
  let component: SuperLeagueStandingsComponent;
  let fixture: ComponentFixture<SuperLeagueStandingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuperLeagueStandingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperLeagueStandingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

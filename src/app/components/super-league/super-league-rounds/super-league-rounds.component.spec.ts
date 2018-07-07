import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperLeagueRoundsComponent } from './super-league-rounds.component';

describe('SuperLeagueRoundsComponent', () => {
  let component: SuperLeagueRoundsComponent;
  let fixture: ComponentFixture<SuperLeagueRoundsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuperLeagueRoundsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperLeagueRoundsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

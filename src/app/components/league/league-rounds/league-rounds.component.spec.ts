import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeagueRoundsComponent } from './league-rounds.component';

describe('LeagueRoundsComponent', () => {
  let component: LeagueRoundsComponent;
  let fixture: ComponentFixture<LeagueRoundsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeagueRoundsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeagueRoundsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

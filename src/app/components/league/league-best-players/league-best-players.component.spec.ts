import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeagueBestPlayersComponent } from './league-best-players.component';

describe('LeagueBestPlayersComponent', () => {
  let component: LeagueBestPlayersComponent;
  let fixture: ComponentFixture<LeagueBestPlayersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeagueBestPlayersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeagueBestPlayersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

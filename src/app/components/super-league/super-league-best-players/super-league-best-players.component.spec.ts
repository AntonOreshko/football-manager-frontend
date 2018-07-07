import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperLeagueBestPlayersComponent } from './super-league-best-players.component';

describe('SuperLeagueBestPlayersComponent', () => {
  let component: SuperLeagueBestPlayersComponent;
  let fixture: ComponentFixture<SuperLeagueBestPlayersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuperLeagueBestPlayersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperLeagueBestPlayersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

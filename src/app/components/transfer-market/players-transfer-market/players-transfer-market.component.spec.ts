import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayersTransferMarketComponent } from './players-transfer-market.component';

describe('PlayersTransferMarketComponent', () => {
  let component: PlayersTransferMarketComponent;
  let fixture: ComponentFixture<PlayersTransferMarketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayersTransferMarketComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayersTransferMarketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

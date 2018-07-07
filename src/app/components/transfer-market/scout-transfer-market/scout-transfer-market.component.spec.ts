import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScoutTransferMarketComponent } from './scout-transfer-market.component';

describe('ScoutTransferMarketComponent', () => {
  let component: ScoutTransferMarketComponent;
  let fixture: ComponentFixture<ScoutTransferMarketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScoutTransferMarketComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScoutTransferMarketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

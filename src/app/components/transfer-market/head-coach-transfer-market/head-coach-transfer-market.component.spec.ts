import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadCoachTransferMarketComponent } from './head-coach-transfer-market.component';

describe('HeadCoachTransferMarketComponent', () => {
  let component: HeadCoachTransferMarketComponent;
  let fixture: ComponentFixture<HeadCoachTransferMarketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeadCoachTransferMarketComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadCoachTransferMarketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

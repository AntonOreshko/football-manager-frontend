import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferMarketComponent } from './transfer-market.component';

describe('TransferMarketComponent', () => {
  let component: TransferMarketComponent;
  let fixture: ComponentFixture<TransferMarketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransferMarketComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransferMarketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

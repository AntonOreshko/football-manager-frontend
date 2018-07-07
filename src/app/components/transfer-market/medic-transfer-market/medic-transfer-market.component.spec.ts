import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicTransferMarketComponent } from './medic-transfer-market.component';

describe('MedicTransferMarketComponent', () => {
  let component: MedicTransferMarketComponent;
  let fixture: ComponentFixture<MedicTransferMarketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicTransferMarketComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicTransferMarketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

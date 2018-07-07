import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadCoachAssistentTransferMarketComponent } from './head-coach-assistent-transfer-market.component';

describe('HeadCoachAssistentTransferMarketComponent', () => {
  let component: HeadCoachAssistentTransferMarketComponent;
  let fixture: ComponentFixture<HeadCoachAssistentTransferMarketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeadCoachAssistentTransferMarketComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadCoachAssistentTransferMarketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

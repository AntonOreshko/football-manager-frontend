import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PsychologistTransferMarketComponent } from './psychologist-transfer-market.component';

describe('PsychologistTransferMarketComponent', () => {
  let component: PsychologistTransferMarketComponent;
  let fixture: ComponentFixture<PsychologistTransferMarketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PsychologistTransferMarketComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PsychologistTransferMarketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

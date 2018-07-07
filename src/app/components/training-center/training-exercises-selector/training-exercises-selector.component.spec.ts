import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingExercisesSelectorComponent } from './training-exercises-selector.component';

describe('TrainingExercisesSelectorComponent', () => {
  let component: TrainingExercisesSelectorComponent;
  let fixture: ComponentFixture<TrainingExercisesSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrainingExercisesSelectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainingExercisesSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkoutDivComponent } from './workout-div.component';

describe('WorkoutDivComponent', () => {
  let component: WorkoutDivComponent;
  let fixture: ComponentFixture<WorkoutDivComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkoutDivComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkoutDivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

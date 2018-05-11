import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkoutWalkthroughComponent } from './workout-walkthrough.component';

describe('WorkoutWalkthroughComponent', () => {
  let component: WorkoutWalkthroughComponent;
  let fixture: ComponentFixture<WorkoutWalkthroughComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkoutWalkthroughComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkoutWalkthroughComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

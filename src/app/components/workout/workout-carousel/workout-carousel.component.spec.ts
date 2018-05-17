import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkoutCarouselComponent } from './workout-carousel.component';

describe('WorkoutCarouselComponent', () => {
  let component: WorkoutCarouselComponent;
  let fixture: ComponentFixture<WorkoutCarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkoutCarouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkoutCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

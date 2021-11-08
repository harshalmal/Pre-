import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestimonialVideosComponent } from './testimonial-videos.component';

describe('TestimonialVideosComponent', () => {
  let component: TestimonialVideosComponent;
  let fixture: ComponentFixture<TestimonialVideosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestimonialVideosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestimonialVideosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

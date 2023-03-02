import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParallaxShowComponent } from './parallax-show.component';

describe('ParallaxShowComponent', () => {
  let component: ParallaxShowComponent;
  let fixture: ComponentFixture<ParallaxShowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParallaxShowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParallaxShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

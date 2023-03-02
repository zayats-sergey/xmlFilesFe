import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeepParallaxComponent } from './deep-parallax.component';

describe('DeepParallaxComponent', () => {
  let component: DeepParallaxComponent;
  let fixture: ComponentFixture<DeepParallaxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeepParallaxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeepParallaxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

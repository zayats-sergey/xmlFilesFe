import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostAcommentComponent } from './post-acomment.component';

describe('PostAcommentComponent', () => {
  let component: PostAcommentComponent;
  let fixture: ComponentFixture<PostAcommentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostAcommentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostAcommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

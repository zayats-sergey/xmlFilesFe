import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserProductDbComponent } from './user-product-db.component';

describe('UserProductDbComponent', () => {
  let component: UserProductDbComponent;
  let fixture: ComponentFixture<UserProductDbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserProductDbComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserProductDbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

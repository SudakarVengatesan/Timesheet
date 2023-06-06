import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserWorkviewComponent } from './user-workview.component';

describe('UserWorkviewComponent', () => {
  let component: UserWorkviewComponent;
  let fixture: ComponentFixture<UserWorkviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserWorkviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserWorkviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

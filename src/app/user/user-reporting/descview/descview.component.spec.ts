import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescviewComponent } from './descview.component';

describe('DescviewComponent', () => {
  let component: DescviewComponent;
  let fixture: ComponentFixture<DescviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DescviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DescviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

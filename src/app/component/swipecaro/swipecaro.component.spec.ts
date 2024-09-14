import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwipecaroComponent } from './swipecaro.component';

describe('SwipecaroComponent', () => {
  let component: SwipecaroComponent;
  let fixture: ComponentFixture<SwipecaroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SwipecaroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SwipecaroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

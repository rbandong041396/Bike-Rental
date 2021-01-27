import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindabikeComponent } from './findabike.component';

describe('FindabikeComponent', () => {
  let component: FindabikeComponent;
  let fixture: ComponentFixture<FindabikeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindabikeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FindabikeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

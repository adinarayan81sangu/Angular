import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmswellcomepageComponent } from './emswellcomepage.component';

describe('EmswellcomepageComponent', () => {
  let component: EmswellcomepageComponent;
  let fixture: ComponentFixture<EmswellcomepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmswellcomepageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmswellcomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

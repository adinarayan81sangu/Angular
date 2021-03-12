import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignRespnsibilitiesComponent } from './assign-respnsibilities.component';

describe('AssignRespnsibilitiesComponent', () => {
  let component: AssignRespnsibilitiesComponent;
  let fixture: ComponentFixture<AssignRespnsibilitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssignRespnsibilitiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignRespnsibilitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

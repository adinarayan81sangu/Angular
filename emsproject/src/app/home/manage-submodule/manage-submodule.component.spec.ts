import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageSubmoduleComponent } from './manage-submodule.component';

describe('ManageSubmoduleComponent', () => {
  let component: ManageSubmoduleComponent;
  let fixture: ComponentFixture<ManageSubmoduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageSubmoduleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageSubmoduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassifyManagementComponent } from './classify-management.component';

describe('ClassifyManagementComponent', () => {
  let component: ClassifyManagementComponent;
  let fixture: ComponentFixture<ClassifyManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClassifyManagementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClassifyManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InWellInspectionComponent } from './in-well-inspection.component';

describe('InWellInspectionComponent', () => {
  let component: InWellInspectionComponent;
  let fixture: ComponentFixture<InWellInspectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InWellInspectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InWellInspectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

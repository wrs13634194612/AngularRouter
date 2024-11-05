import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InspectionItemsComponent } from './inspection-items.component';

describe('InspectionItemsComponent', () => {
  let component: InspectionItemsComponent;
  let fixture: ComponentFixture<InspectionItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InspectionItemsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InspectionItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

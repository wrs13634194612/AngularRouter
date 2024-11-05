import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WellSupplyCirculationComponent } from './well-supply-circulation.component';

describe('WellSupplyCirculationComponent', () => {
  let component: WellSupplyCirculationComponent;
  let fixture: ComponentFixture<WellSupplyCirculationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WellSupplyCirculationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WellSupplyCirculationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

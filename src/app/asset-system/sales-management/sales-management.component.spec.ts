import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesManagementComponent } from './sales-management.component';

describe('SalesManagementComponent', () => {
  let component: SalesManagementComponent;
  let fixture: ComponentFixture<SalesManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SalesManagementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SalesManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

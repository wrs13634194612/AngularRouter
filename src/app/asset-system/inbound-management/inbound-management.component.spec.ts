import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InboundManagementComponent } from './inbound-management.component';

describe('InboundManagementComponent', () => {
  let component: InboundManagementComponent;
  let fixture: ComponentFixture<InboundManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InboundManagementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InboundManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

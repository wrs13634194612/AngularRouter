import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WellTeamManagementComponent } from './well-team-management.component';

describe('WellTeamManagementComponent', () => {
  let component: WellTeamManagementComponent;
  let fixture: ComponentFixture<WellTeamManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WellTeamManagementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WellTeamManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

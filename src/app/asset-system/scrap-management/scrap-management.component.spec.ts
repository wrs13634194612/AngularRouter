import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrapManagementComponent } from './scrap-management.component';

describe('ScrapManagementComponent', () => {
  let component: ScrapManagementComponent;
  let fixture: ComponentFixture<ScrapManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScrapManagementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScrapManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

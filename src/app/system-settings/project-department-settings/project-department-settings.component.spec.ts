import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectDepartmentSettingsComponent } from './project-department-settings.component';

describe('ProjectDepartmentSettingsComponent', () => {
  let component: ProjectDepartmentSettingsComponent;
  let fixture: ComponentFixture<ProjectDepartmentSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectDepartmentSettingsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectDepartmentSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

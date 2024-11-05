import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessConfigurationComponent } from './process-configuration.component';

describe('ProcessConfigurationComponent', () => {
  let component: ProcessConfigurationComponent;
  let fixture: ComponentFixture<ProcessConfigurationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProcessConfigurationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProcessConfigurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

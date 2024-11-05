import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrillingToolComponent } from './drilling-tool.component';

describe('DrillingToolComponent', () => {
  let component: DrillingToolComponent;
  let fixture: ComponentFixture<DrillingToolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DrillingToolComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DrillingToolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

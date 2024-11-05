import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlterSettingComponent } from './alter-setting.component';

describe('AlterSettingComponent', () => {
  let component: AlterSettingComponent;
  let fixture: ComponentFixture<AlterSettingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlterSettingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlterSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

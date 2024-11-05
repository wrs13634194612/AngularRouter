import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LevelSettingComponent } from './level-setting.component';

describe('LevelSettingComponent', () => {
  let component: LevelSettingComponent;
  let fixture: ComponentFixture<LevelSettingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LevelSettingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LevelSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

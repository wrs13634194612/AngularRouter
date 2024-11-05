import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetSystemComponent } from './asset-system.component';

describe('AssetSystemComponent', () => {
  let component: AssetSystemComponent;
  let fixture: ComponentFixture<AssetSystemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AssetSystemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssetSystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

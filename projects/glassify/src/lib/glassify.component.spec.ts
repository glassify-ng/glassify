import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlassifyComponent } from './glassify.component';

describe('GlassifyComponent', () => {
  let component: GlassifyComponent;
  let fixture: ComponentFixture<GlassifyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GlassifyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GlassifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

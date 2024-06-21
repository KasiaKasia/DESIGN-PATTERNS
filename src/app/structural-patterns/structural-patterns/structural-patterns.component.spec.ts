import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StructuralPatternsComponent } from './structural-patterns.component';

describe('StructuralPatternsComponent', () => {
  let component: StructuralPatternsComponent;
  let fixture: ComponentFixture<StructuralPatternsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StructuralPatternsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StructuralPatternsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

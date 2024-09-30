import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BehavioralPatternsComponent } from './behavioral-patterns.component';

describe('BehavioralPatternsComponent', () => {
  let component: BehavioralPatternsComponent;
  let fixture: ComponentFixture<BehavioralPatternsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BehavioralPatternsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BehavioralPatternsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

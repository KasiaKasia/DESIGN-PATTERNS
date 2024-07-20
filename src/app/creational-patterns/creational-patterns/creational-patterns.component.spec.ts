import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreationalPatternsComponent } from './creational-patterns.component';

describe('CreationalPatternsComponent', () => {
  let component: CreationalPatternsComponent;
  let fixture: ComponentFixture<CreationalPatternsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreationalPatternsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreationalPatternsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

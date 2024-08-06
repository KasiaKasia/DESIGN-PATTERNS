import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleFactoryComponent } from './simple-factory.component';

describe('SimpleFactoryComponent', () => {
  let component: SimpleFactoryComponent;
  let fixture: ComponentFixture<SimpleFactoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SimpleFactoryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SimpleFactoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

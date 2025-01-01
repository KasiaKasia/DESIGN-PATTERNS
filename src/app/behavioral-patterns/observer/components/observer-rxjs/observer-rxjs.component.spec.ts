import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObserverRxJsComponent } from './observer-rxjs.component';

describe('ObserverRxJsComponent', () => {
  let component: ObserverRxJsComponent;
  let fixture: ComponentFixture<ObserverRxJsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ObserverRxJsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ObserverRxJsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

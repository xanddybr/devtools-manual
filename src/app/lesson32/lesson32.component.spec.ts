import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lesson32Component } from './lesson32.component';

describe('Lesson32Component', () => {
  let component: Lesson32Component;
  let fixture: ComponentFixture<Lesson32Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lesson32Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Lesson32Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

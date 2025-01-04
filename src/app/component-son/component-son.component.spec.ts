import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentSonComponent } from './component-son.component';

describe('ComponentSonComponent', () => {
  let component: ComponentSonComponent;
  let fixture: ComponentFixture<ComponentSonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponentSonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ComponentSonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

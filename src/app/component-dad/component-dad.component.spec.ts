import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentDadComponent } from './component-dad.component';

describe('ComponentDadComponent', () => {
  let component: ComponentDadComponent;
  let fixture: ComponentFixture<ComponentDadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponentDadComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ComponentDadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

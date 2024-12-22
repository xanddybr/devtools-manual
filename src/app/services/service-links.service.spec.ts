import { TestBed } from '@angular/core/testing';
import { ServiceLinksService } from './service-links.service';

describe('ServiceLinksService', () => {
  let service: ServiceLinksService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceLinksService);
  });

  it('function created with', () => {
    expect(service.fillItensLink()).toBeTruthy();
    
  });

  it('the variable done created with sucess', () => {
    expect(service.url).toBeTruthy();
    
  });

  it('the variable done created with sucess', () => {
    expect(service.getCep()).toBeTruthy();
    
  });



});

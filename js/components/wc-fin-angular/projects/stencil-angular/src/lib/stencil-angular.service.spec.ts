import { TestBed } from '@angular/core/testing';

import { StencilAngularService } from './stencil-angular.service';

describe('StencilAngularService', () => {
  let service: StencilAngularService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StencilAngularService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

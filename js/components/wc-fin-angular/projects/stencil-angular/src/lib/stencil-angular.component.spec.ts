import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StencilAngularComponent } from './stencil-angular.component';

describe('StencilAngularComponent', () => {
  let component: StencilAngularComponent;
  let fixture: ComponentFixture<StencilAngularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StencilAngularComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StencilAngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

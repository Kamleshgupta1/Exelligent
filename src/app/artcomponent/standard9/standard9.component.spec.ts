import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Standard9Component } from './standard9.component';

describe('Standard9Component', () => {
  let component: Standard9Component;
  let fixture: ComponentFixture<Standard9Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Standard9Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Standard9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

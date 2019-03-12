import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Standard5Component } from './standard5.component';

describe('Standard5Component', () => {
  let component: Standard5Component;
  let fixture: ComponentFixture<Standard5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Standard5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Standard5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

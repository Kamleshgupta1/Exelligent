import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Standard8Component } from './standard8.component';

describe('Standard8Component', () => {
  let component: Standard8Component;
  let fixture: ComponentFixture<Standard8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Standard8Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Standard8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

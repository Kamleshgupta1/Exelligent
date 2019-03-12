import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Standard7Component } from './standard7.component';

describe('Standard7Component', () => {
  let component: Standard7Component;
  let fixture: ComponentFixture<Standard7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Standard7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Standard7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

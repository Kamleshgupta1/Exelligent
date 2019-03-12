import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Standard6Component } from './standard6.component';

describe('Standard6Component', () => {
  let component: Standard6Component;
  let fixture: ComponentFixture<Standard6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Standard6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Standard6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

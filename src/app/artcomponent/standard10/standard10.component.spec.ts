import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Standard10Component } from './standard10.component';

describe('Standard10Component', () => {
  let component: Standard10Component;
  let fixture: ComponentFixture<Standard10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Standard10Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Standard10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

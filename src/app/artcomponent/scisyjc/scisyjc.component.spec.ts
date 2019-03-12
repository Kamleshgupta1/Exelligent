import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScisyjcComponent } from './scisyjc.component';

describe('ScisyjcComponent', () => {
  let component: ScisyjcComponent;
  let fixture: ComponentFixture<ScisyjcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScisyjcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScisyjcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScifyjcComponent } from './scifyjc.component';

describe('ScifyjcComponent', () => {
  let component: ScifyjcComponent;
  let fixture: ComponentFixture<ScifyjcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScifyjcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScifyjcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComfyjcComponent } from './comfyjc.component';

describe('ComfyjcComponent', () => {
  let component: ComfyjcComponent;
  let fixture: ComponentFixture<ComfyjcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComfyjcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComfyjcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

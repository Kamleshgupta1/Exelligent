import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComtrickComponent } from './comtrick.component';

describe('ComtrickComponent', () => {
  let component: ComtrickComponent;
  let fixture: ComponentFixture<ComtrickComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComtrickComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComtrickComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

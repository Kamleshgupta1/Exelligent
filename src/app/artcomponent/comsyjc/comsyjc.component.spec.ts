import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComsyjcComponent } from './comsyjc.component';

describe('ComsyjcComponent', () => {
  let component: ComsyjcComponent;
  let fixture: ComponentFixture<ComsyjcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComsyjcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComsyjcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

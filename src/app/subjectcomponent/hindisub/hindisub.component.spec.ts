import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HindisubComponent } from './hindisub.component';

describe('HindisubComponent', () => {
  let component: HindisubComponent;
  let fixture: ComponentFixture<HindisubComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HindisubComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HindisubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

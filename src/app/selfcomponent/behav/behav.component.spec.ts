import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BehavComponent } from './behav.component';

describe('BehavComponent', () => {
  let component: BehavComponent;
  let fixture: ComponentFixture<BehavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BehavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BehavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

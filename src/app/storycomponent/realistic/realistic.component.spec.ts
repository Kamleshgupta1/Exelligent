import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RealisticComponent } from './realistic.component';

describe('RealisticComponent', () => {
  let component: RealisticComponent;
  let fixture: ComponentFixture<RealisticComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RealisticComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RealisticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

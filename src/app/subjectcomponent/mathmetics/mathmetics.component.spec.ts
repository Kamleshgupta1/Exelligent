import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MathmeticsComponent } from './mathmetics.component';

describe('MathmeticsComponent', () => {
  let component: MathmeticsComponent;
  let fixture: ComponentFixture<MathmeticsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MathmeticsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MathmeticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

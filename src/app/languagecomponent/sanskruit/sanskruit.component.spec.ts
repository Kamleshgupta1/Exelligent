import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SanskruitComponent } from './sanskruit.component';

describe('SanskruitComponent', () => {
  let component: SanskruitComponent;
  let fixture: ComponentFixture<SanskruitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SanskruitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SanskruitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

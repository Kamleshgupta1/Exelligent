import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtsyjcComponent } from './artsyjc.component';

describe('ArtsyjcComponent', () => {
  let component: ArtsyjcComponent;
  let fixture: ComponentFixture<ArtsyjcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtsyjcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtsyjcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JeeadvanceComponent } from './jeeadvance.component';

describe('JeeadvanceComponent', () => {
  let component: JeeadvanceComponent;
  let fixture: ComponentFixture<JeeadvanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JeeadvanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JeeadvanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JeemainComponent } from './jeemain.component';

describe('JeemainComponent', () => {
  let component: JeemainComponent;
  let fixture: ComponentFixture<JeemainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JeemainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JeemainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PanjabiComponent } from './panjabi.component';

describe('PanjabiComponent', () => {
  let component: PanjabiComponent;
  let fixture: ComponentFixture<PanjabiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PanjabiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanjabiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

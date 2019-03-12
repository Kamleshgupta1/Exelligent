import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PanchtantraComponent } from './panchtantra.component';

describe('PanchtantraComponent', () => {
  let component: PanchtantraComponent;
  let fixture: ComponentFixture<PanchtantraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PanchtantraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanchtantraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpscComponent } from './upsc.component';

describe('UpscComponent', () => {
  let component: UpscComponent;
  let fixture: ComponentFixture<UpscComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpscComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpscComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

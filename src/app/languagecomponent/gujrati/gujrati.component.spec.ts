import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GujratiComponent } from './gujrati.component';

describe('GujratiComponent', () => {
  let component: GujratiComponent;
  let fixture: ComponentFixture<GujratiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GujratiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GujratiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

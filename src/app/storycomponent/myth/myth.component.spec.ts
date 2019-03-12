import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MythComponent } from './myth.component';

describe('MythComponent', () => {
  let component: MythComponent;
  let fixture: ComponentFixture<MythComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MythComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MythComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobtrickComponent } from './mobtrick.component';

describe('MobtrickComponent', () => {
  let component: MobtrickComponent;
  let fixture: ComponentFixture<MobtrickComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobtrickComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobtrickComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

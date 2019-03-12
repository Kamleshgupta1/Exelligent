import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobappComponent } from './mobapp.component';

describe('MobappComponent', () => {
  let component: MobappComponent;
  let fixture: ComponentFixture<MobappComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobappComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunComponent } from './commun.component';

describe('CommunComponent', () => {
  let component: CommunComponent;
  let fixture: ComponentFixture<CommunComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommunComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommunComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

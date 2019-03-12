import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntranceexamComponent } from './entranceexam.component';

describe('EntranceexamComponent', () => {
  let component: EntranceexamComponent;
  let fixture: ComponentFixture<EntranceexamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntranceexamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntranceexamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

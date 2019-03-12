import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistorysubComponent } from './historysub.component';

describe('HistorysubComponent', () => {
  let component: HistorysubComponent;
  let fixture: ComponentFixture<HistorysubComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistorysubComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistorysubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

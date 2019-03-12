import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarathisubComponent } from './marathisub.component';

describe('MarathisubComponent', () => {
  let component: MarathisubComponent;
  let fixture: ComponentFixture<MarathisubComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarathisubComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarathisubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

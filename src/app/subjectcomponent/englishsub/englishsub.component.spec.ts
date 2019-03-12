import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnglishsubComponent } from './englishsub.component';

describe('EnglishsubComponent', () => {
  let component: EnglishsubComponent;
  let fixture: ComponentFixture<EnglishsubComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnglishsubComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnglishsubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

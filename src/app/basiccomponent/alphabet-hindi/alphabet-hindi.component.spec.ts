import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlphabetHindiComponent } from './alphabet-hindi.component';

describe('AlphabetHindiComponent', () => {
  let component: AlphabetHindiComponent;
  let fixture: ComponentFixture<AlphabetHindiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlphabetHindiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlphabetHindiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

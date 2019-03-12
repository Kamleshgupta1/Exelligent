import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KannadComponent } from './kannad.component';

describe('KannadComponent', () => {
  let component: KannadComponent;
  let fixture: ComponentFixture<KannadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KannadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KannadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

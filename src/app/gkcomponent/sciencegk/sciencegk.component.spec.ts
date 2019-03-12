import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SciencegkComponent } from './sciencegk.component';

describe('SciencegkComponent', () => {
  let component: SciencegkComponent;
  let fixture: ComponentFixture<SciencegkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SciencegkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SciencegkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

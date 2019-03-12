import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SanskruitsubComponent } from './sanskruitsub.component';

describe('SanskruitsubComponent', () => {
  let component: SanskruitsubComponent;
  let fixture: ComponentFixture<SanskruitsubComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SanskruitsubComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SanskruitsubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

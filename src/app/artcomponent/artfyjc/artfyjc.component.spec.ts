import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtfyjcComponent } from './artfyjc.component';

describe('ArtfyjcComponent', () => {
  let component: ArtfyjcComponent;
  let fixture: ComponentFixture<ArtfyjcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtfyjcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtfyjcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

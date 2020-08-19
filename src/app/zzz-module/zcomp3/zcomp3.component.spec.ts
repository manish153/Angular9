import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Zcomp3Component } from './zcomp3.component';

describe('Zcomp3Component', () => {
  let component: Zcomp3Component;
  let fixture: ComponentFixture<Zcomp3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Zcomp3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Zcomp3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

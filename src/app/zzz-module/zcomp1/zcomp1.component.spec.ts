import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Zcomp1Component } from './zcomp1.component';

describe('Zcomp1Component', () => {
  let component: Zcomp1Component;
  let fixture: ComponentFixture<Zcomp1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Zcomp1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Zcomp1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

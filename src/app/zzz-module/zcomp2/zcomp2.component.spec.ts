import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Zcomp2Component } from './zcomp2.component';

describe('Zcomp2Component', () => {
  let component: Zcomp2Component;
  let fixture: ComponentFixture<Zcomp2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Zcomp2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Zcomp2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

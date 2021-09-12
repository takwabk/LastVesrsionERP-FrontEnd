import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Injection240Component } from './injection240.component';

describe('Injection240Component', () => {
  let component: Injection240Component;
  let fixture: ComponentFixture<Injection240Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Injection240Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Injection240Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

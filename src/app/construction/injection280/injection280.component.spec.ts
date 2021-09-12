import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Injection280Component } from './injection280.component';

describe('Injection280Component', () => {
  let component: Injection280Component;
  let fixture: ComponentFixture<Injection280Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Injection280Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Injection280Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

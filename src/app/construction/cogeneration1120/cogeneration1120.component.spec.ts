import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Cogeneration1120Component } from './cogeneration1120.component';

describe('Cogeneration1120Component', () => {
  let component: Cogeneration1120Component;
  let fixture: ComponentFixture<Cogeneration1120Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Cogeneration1120Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Cogeneration1120Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

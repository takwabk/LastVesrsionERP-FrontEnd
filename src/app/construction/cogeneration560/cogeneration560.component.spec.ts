import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Cogeneration560Component } from './cogeneration560.component';

describe('Cogeneration560Component', () => {
  let component: Cogeneration560Component;
  let fixture: ComponentFixture<Cogeneration560Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Cogeneration560Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Cogeneration560Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

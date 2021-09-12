import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Injection140Component } from './injection140.component';

describe('Injection140Component', () => {
  let component: Injection140Component;
  let fixture: ComponentFixture<Injection140Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Injection140Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Injection140Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

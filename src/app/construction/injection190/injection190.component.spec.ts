import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Injection190Component } from './injection190.component';

describe('Injection190Component', () => {
  let component: Injection190Component;
  let fixture: ComponentFixture<Injection190Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Injection190Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Injection190Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Cogeneration760Component } from './cogeneration760.component';

describe('Cogeneration760Component', () => {
  let component: Cogeneration760Component;
  let fixture: ComponentFixture<Cogeneration760Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Cogeneration760Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Cogeneration760Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

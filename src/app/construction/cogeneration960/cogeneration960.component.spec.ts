import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Cogeneration960Component } from './cogeneration960.component';

describe('Cogeneration960Component', () => {
  let component: Cogeneration960Component;
  let fixture: ComponentFixture<Cogeneration960Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Cogeneration960Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Cogeneration960Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

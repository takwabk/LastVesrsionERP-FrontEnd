import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavFicheComponent } from './nav-fiche.component';

describe('NavFicheComponent', () => {
  let component: NavFicheComponent;
  let fixture: ComponentFixture<NavFicheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavFicheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavFicheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

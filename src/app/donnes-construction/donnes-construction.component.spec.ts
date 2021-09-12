import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DonnesConstructionComponent } from './donnes-construction.component';

describe('DonnesConstructionComponent', () => {
  let component: DonnesConstructionComponent;
  let fixture: ComponentFixture<DonnesConstructionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DonnesConstructionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DonnesConstructionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

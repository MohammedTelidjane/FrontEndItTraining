import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccueilTempComponent } from './accueil-temp.component';

describe('AccueilTempComponent', () => {
  let component: AccueilTempComponent;
  let fixture: ComponentFixture<AccueilTempComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccueilTempComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccueilTempComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

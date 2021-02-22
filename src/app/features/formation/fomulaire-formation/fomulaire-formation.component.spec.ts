import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FomulaireFormationComponent } from './fomulaire-formation.component';

describe('FomulaireFormationComponent', () => {
  let component: FomulaireFormationComponent;
  let fixture: ComponentFixture<FomulaireFormationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FomulaireFormationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FomulaireFormationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

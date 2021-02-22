import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulaireThemeComponent } from './formulaire-theme.component';

describe('FormulaireThemeComponent', () => {
  let component: FormulaireThemeComponent;
  let fixture: ComponentFixture<FormulaireThemeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormulaireThemeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormulaireThemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

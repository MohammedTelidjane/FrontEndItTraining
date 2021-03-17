import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulaireMiseAJourThemeComponent } from './formulaire-mise-a-jour-theme.component';

describe('FormulaireMiseAJourThemeComponent', () => {
  let component: FormulaireMiseAJourThemeComponent;
  let fixture: ComponentFixture<FormulaireMiseAJourThemeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormulaireMiseAJourThemeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormulaireMiseAJourThemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

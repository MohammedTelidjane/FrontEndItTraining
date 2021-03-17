import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulaireMiseAJourFormateurComponent } from './formulaire-mise-a-jour-formateur.component';

describe('FormulaireMiseAJourFormateurComponent', () => {
  let component: FormulaireMiseAJourFormateurComponent;
  let fixture: ComponentFixture<FormulaireMiseAJourFormateurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormulaireMiseAJourFormateurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormulaireMiseAJourFormateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

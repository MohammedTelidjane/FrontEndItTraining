import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulaireMiseAJourSessionComponent } from './formulaire-mise-a-jour-session.component';

describe('FormulaireMiseAJourSessionComponent', () => {
  let component: FormulaireMiseAJourSessionComponent;
  let fixture: ComponentFixture<FormulaireMiseAJourSessionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormulaireMiseAJourSessionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormulaireMiseAJourSessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

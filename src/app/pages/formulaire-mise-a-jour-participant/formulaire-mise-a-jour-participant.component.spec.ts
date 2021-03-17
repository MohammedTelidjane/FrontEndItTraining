import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulaireMiseAJourParticipantComponent } from './formulaire-mise-a-jour-participant.component';

describe('FormulaireMiseAJourParticipantComponent', () => {
  let component: FormulaireMiseAJourParticipantComponent;
  let fixture: ComponentFixture<FormulaireMiseAJourParticipantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormulaireMiseAJourParticipantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormulaireMiseAJourParticipantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

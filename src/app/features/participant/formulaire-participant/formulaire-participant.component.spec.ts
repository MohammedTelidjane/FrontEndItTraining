import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulaireParticipantComponent } from './formulaire-participant.component';

describe('FormulaireParticipantComponent', () => {
  let component: FormulaireParticipantComponent;
  let fixture: ComponentFixture<FormulaireParticipantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormulaireParticipantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormulaireParticipantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

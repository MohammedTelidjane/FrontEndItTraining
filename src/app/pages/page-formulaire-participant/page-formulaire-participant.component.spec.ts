import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageFormulaireParticipantComponent } from './page-formulaire-participant.component';

describe('PageFormulaireParticipantComponent', () => {
  let component: PageFormulaireParticipantComponent;
  let fixture: ComponentFixture<PageFormulaireParticipantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageFormulaireParticipantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageFormulaireParticipantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

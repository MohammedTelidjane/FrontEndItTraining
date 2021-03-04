import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageFormulaireModifFormateurComponent } from './page-formulaire-modif-formateur.component';

describe('PageFormulaireModifFormateurComponent', () => {
  let component: PageFormulaireModifFormateurComponent;
  let fixture: ComponentFixture<PageFormulaireModifFormateurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageFormulaireModifFormateurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageFormulaireModifFormateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

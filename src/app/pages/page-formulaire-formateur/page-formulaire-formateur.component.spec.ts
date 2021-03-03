import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageFormulaireFormateurComponent } from './page-formulaire-formateur.component';

describe('PageFormulaireFormateurComponent', () => {
  let component: PageFormulaireFormateurComponent;
  let fixture: ComponentFixture<PageFormulaireFormateurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageFormulaireFormateurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageFormulaireFormateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

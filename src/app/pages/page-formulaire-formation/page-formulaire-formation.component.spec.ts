import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageFormulaireFormationComponent } from './page-formulaire-formation.component';

describe('PageFormulaireFormationComponent', () => {
  let component: PageFormulaireFormationComponent;
  let fixture: ComponentFixture<PageFormulaireFormationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageFormulaireFormationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageFormulaireFormationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

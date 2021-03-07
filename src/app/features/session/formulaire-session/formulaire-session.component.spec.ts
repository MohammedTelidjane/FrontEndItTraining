import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulaireSessionComponent } from './formulaire-session.component';

describe('FormulaireSessionComponent', () => {
  let component: FormulaireSessionComponent;
  let fixture: ComponentFixture<FormulaireSessionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormulaireSessionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormulaireSessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

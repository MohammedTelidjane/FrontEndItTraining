import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulaireMiseAjourComponent } from './formulaire-mise-ajour.component';

describe('FormulaireMiseAjourComponent', () => {
  let component: FormulaireMiseAjourComponent;
  let fixture: ComponentFixture<FormulaireMiseAjourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormulaireMiseAjourComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormulaireMiseAjourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfficheListeEtModifieFormateurComponent } from './affiche-liste-et-modifie-formateur.component';

describe('AfficheListeEtModifieFormateurComponent', () => {
  let component: AfficheListeEtModifieFormateurComponent;
  let fixture: ComponentFixture<AfficheListeEtModifieFormateurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AfficheListeEtModifieFormateurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AfficheListeEtModifieFormateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

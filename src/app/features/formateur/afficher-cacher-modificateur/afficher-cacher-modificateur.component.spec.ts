import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfficherCacherModificateurComponent } from './afficher-cacher-modificateur.component';

describe('AfficherCacherModificateurComponent', () => {
  let component: AfficherCacherModificateurComponent;
  let fixture: ComponentFixture<AfficherCacherModificateurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AfficherCacherModificateurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AfficherCacherModificateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

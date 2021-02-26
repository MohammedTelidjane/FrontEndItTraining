import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageFormationUtilisateurComponent } from './page-formation-utilisateur.component';

describe('PageFormationUtilisateurComponent', () => {
  let component: PageFormationUtilisateurComponent;
  let fixture: ComponentFixture<PageFormationUtilisateurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageFormationUtilisateurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageFormationUtilisateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

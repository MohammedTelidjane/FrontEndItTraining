import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageFormationAdministrateurComponent } from './page-formation-administrateur.component';

describe('PageFormationAdministrateurComponent', () => {
  let component: PageFormationAdministrateurComponent;
  let fixture: ComponentFixture<PageFormationAdministrateurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageFormationAdministrateurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageFormationAdministrateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

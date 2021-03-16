import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageThemeAdministrateurComponent } from './page-theme-administrateur.component';

describe('PageThemeAdministrateurComponent', () => {
  let component: PageThemeAdministrateurComponent;
  let fixture: ComponentFixture<PageThemeAdministrateurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageThemeAdministrateurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageThemeAdministrateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

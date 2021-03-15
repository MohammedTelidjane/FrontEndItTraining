import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageSessionAdministrateurComponent } from './page-session-administrateur.component';

describe('PageSessionAdministrateurComponent', () => {
  let component: PageSessionAdministrateurComponent;
  let fixture: ComponentFixture<PageSessionAdministrateurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageSessionAdministrateurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageSessionAdministrateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

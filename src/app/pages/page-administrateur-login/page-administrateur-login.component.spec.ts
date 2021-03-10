import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageAdministrateurLoginComponent } from './page-administrateur-login.component';

describe('PageAdministrateurLoginComponent', () => {
  let component: PageAdministrateurLoginComponent;
  let fixture: ComponentFixture<PageAdministrateurLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageAdministrateurLoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageAdministrateurLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

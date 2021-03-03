import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageListeFormateurComponent } from './page-liste-formateur.component';

describe('PageListeFormateurComponent', () => {
  let component: PageListeFormateurComponent;
  let fixture: ComponentFixture<PageListeFormateurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageListeFormateurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageListeFormateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

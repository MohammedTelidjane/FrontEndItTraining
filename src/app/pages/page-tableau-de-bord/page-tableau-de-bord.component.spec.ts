import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageTableauDeBordComponent } from './page-tableau-de-bord.component';

describe('PageTableauDeBordComponent', () => {
  let component: PageTableauDeBordComponent;
  let fixture: ComponentFixture<PageTableauDeBordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageTableauDeBordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageTableauDeBordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssocierFormateurAFormationComponent } from './associer-formateur-aformation.component';

describe('AssocierFormateurAFormationComponent', () => {
  let component: AssocierFormateurAFormationComponent;
  let fixture: ComponentFixture<AssocierFormateurAFormationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssocierFormateurAFormationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssocierFormateurAFormationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

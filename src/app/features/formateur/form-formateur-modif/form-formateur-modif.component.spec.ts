import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormFormateurModifComponent } from './form-formateur-modif.component';

describe('FormFormateurModifComponent', () => {
  let component: FormFormateurModifComponent;
  let fixture: ComponentFixture<FormFormateurModifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormFormateurModifComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormFormateurModifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

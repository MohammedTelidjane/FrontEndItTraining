import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardFormateurComponent } from './card-formateur.component';

describe('CardFormateurComponent', () => {
  let component: CardFormateurComponent;
  let fixture: ComponentFixture<CardFormateurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardFormateurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardFormateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

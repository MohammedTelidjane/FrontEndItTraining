import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageParticipantAdministrateurComponent } from './page-participant-administrateur.component';

describe('PageParticipantAdministrateurComponent', () => {
  let component: PageParticipantAdministrateurComponent;
  let fixture: ComponentFixture<PageParticipantAdministrateurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageParticipantAdministrateurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageParticipantAdministrateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

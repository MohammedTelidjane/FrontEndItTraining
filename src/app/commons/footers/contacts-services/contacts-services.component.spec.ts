import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactsServicesComponent } from './contacts-services.component';

describe('ContactsServicesComponent', () => {
  let component: ContactsServicesComponent;
  let fixture: ComponentFixture<ContactsServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactsServicesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactsServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

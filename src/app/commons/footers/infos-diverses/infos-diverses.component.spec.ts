import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfosDiversesComponent } from './infos-diverses.component';

describe('InfosDiversesComponent', () => {
  let component: InfosDiversesComponent;
  let fixture: ComponentFixture<InfosDiversesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfosDiversesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfosDiversesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

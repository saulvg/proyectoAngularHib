import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormModalPlanetaComponent } from './form-modal-planeta.component';

describe('FormModalPlanetaComponent', () => {
  let component: FormModalPlanetaComponent;
  let fixture: ComponentFixture<FormModalPlanetaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormModalPlanetaComponent]
    });
    fixture = TestBed.createComponent(FormModalPlanetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

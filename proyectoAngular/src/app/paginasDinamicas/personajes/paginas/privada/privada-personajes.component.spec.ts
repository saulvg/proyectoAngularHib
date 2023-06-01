import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivadaPersonajesComponent } from './privada-personajes.component';

describe('PrivadaPersonajesComponent', () => {
  let component: PrivadaPersonajesComponent;
  let fixture: ComponentFixture<PrivadaPersonajesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PrivadaPersonajesComponent]
    });
    fixture = TestBed.createComponent(PrivadaPersonajesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicaPersonajesComponent } from './publica-personajes.component';

describe('PublicaPersonajesComponent', () => {
  let component: PublicaPersonajesComponent;
  let fixture: ComponentFixture<PublicaPersonajesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PublicaPersonajesComponent]
    });
    fixture = TestBed.createComponent(PublicaPersonajesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioModalEpisodiosComponent } from './formulario-modal-episodios.component';

describe('FormularioModalEpisodiosComponent', () => {
  let component: FormularioModalEpisodiosComponent;
  let fixture: ComponentFixture<FormularioModalEpisodiosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormularioModalEpisodiosComponent]
    });
    fixture = TestBed.createComponent(FormularioModalEpisodiosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

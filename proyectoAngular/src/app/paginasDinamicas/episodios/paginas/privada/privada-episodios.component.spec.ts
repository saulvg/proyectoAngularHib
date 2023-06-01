import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivadaEpisodiosComponent } from './privada-episodios.component';

describe('PrivadaEpisodiosComponent', () => {
  let component: PrivadaEpisodiosComponent;
  let fixture: ComponentFixture<PrivadaEpisodiosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PrivadaEpisodiosComponent]
    });
    fixture = TestBed.createComponent(PrivadaEpisodiosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

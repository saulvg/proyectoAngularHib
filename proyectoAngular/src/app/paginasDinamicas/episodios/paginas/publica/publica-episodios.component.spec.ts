import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicaEpisodiosComponent } from './publica-episodios.component';

describe('PublicaEpisodiosComponent', () => {
  let component: PublicaEpisodiosComponent;
  let fixture: ComponentFixture<PublicaEpisodiosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PublicaEpisodiosComponent]
    });
    fixture = TestBed.createComponent(PublicaEpisodiosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivadaPlanetasComponent } from './privada-planetas.component';

describe('PrivadaPlanetasComponent', () => {
  let component: PrivadaPlanetasComponent;
  let fixture: ComponentFixture<PrivadaPlanetasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PrivadaPlanetasComponent]
    });
    fixture = TestBed.createComponent(PrivadaPlanetasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

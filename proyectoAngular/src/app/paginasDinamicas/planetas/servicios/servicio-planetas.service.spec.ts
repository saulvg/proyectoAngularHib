import { TestBed } from '@angular/core/testing';

import { ServicioPlanetasService } from './servicio-planetas.service';

describe('ServicioPlanetasService', () => {
  let service: ServicioPlanetasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioPlanetasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

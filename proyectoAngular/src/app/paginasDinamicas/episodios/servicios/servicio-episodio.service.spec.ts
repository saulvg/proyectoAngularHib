import { TestBed } from '@angular/core/testing';

import { ServicioEpisodioService } from './servicio-episodio.service';

describe('ServicioEpisodioService', () => {
  let service: ServicioEpisodioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioEpisodioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

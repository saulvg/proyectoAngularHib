import { TestBed } from '@angular/core/testing';

import { ServcicioAutenticacionService } from './servcicio-autenticacion.service';

describe('ServcicioAutenticacionService', () => {
  let service: ServcicioAutenticacionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServcicioAutenticacionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { InyectarTokenInterceptor } from './inyectar-token.interceptor';

describe('InyectarTokenInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      InyectarTokenInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: InyectarTokenInterceptor = TestBed.inject(InyectarTokenInterceptor);
    expect(interceptor).toBeTruthy();
  });
});

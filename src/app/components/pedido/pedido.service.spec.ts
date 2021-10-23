import { TestBed } from '@angular/core/testing';

import { pedidoService } from './pedido.service';

describe('pedidoService', () => {
  let service: pedidoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(pedidoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

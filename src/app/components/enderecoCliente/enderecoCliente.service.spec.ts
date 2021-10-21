import { TestBed } from '@angular/core/testing';

import { EnderecoClienteService } from './enderecoCliente.service';

describe('enderecoClienteService', () => {
  let service: EnderecoClienteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EnderecoClienteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

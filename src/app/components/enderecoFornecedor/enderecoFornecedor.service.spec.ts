import { TestBed } from '@angular/core/testing';

import { EnderecoFornecedorService } from './enderecoFornecedor.service';

describe('EnderecoFornecedorService', () => {
  let service: EnderecoFornecedorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EnderecoFornecedorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

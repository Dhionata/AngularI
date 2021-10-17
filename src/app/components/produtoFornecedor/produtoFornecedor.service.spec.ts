import { TestBed } from '@angular/core/testing';

import { produtoFornecedorService } from './produtoFornecedor.service';

describe('produtoFornecedorService', () => {
  let service: produtoFornecedorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(produtoFornecedorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

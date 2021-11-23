import { TestBed } from '@angular/core/testing';

import { ProdutoFornecedorService } from './produtoFornecedor.service';

describe('ProdutoFornecedorService', () => {
  let service: ProdutoFornecedorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProdutoFornecedorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

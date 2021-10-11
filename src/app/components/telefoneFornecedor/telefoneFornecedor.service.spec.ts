import { TestBed } from '@angular/core/testing';

import { TelefoneFornecedorService } from './telefoneFornecedor.service';

describe('TelefoneFornecedorService', () => {
  let service: TelefoneFornecedorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TelefoneFornecedorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

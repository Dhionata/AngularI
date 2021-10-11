import { TestBed } from '@angular/core/testing';

import { TelefoneClienteService } from './TelefoneCliente.service';

describe('TelefoneClienteService', () => {
  let service: TelefoneClienteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TelefoneClienteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

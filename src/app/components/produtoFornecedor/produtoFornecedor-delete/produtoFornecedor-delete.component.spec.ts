import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutoFornecedorDeleteComponent } from './produtoFornecedor-delete.component';

describe('ProdutoFornecedorDeleteComponent', () => {
  let component: ProdutoFornecedorDeleteComponent;
  let fixture: ComponentFixture<ProdutoFornecedorDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProdutoFornecedorDeleteComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdutoFornecedorDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

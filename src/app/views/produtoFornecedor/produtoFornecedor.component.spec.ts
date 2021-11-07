import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutoFornecedorComponent } from './produtoFornecedor.component';

describe('ProdutoFornecedorComponent', () => {
  let component: ProdutoFornecedorComponent;
  let fixture: ComponentFixture<ProdutoFornecedorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProdutoFornecedorComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdutoFornecedorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

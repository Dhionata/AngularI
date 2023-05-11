import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutoFornecedorCreateComponent } from './produtoFornecedor-criar.component';

describe('ProdutoFornecedorCreateComponent', () => {
  let component: ProdutoFornecedorCreateComponent;
  let fixture: ComponentFixture<ProdutoFornecedorCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProdutoFornecedorCreateComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdutoFornecedorCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

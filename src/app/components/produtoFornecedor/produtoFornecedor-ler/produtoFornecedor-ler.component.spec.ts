import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutoFornecedorlerComponent } from './produtoFornecedor-ler.component';

describe('ProdutoFornecedorLerComponent', () => {
  let component: ProdutoFornecedorlerComponent;
  let fixture: ComponentFixture<ProdutoFornecedorlerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProdutoFornecedorlerComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdutoFornecedorlerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

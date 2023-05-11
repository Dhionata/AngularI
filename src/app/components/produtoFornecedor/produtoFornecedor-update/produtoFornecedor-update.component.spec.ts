import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutoFornecedorUpdateComponent } from './produtoFornecedor-update.component';

describe('ProdutoFornecedorUpdateComponent', () => {
  let component: ProdutoFornecedorUpdateComponent;
  let fixture: ComponentFixture<ProdutoFornecedorUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProdutoFornecedorUpdateComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdutoFornecedorUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

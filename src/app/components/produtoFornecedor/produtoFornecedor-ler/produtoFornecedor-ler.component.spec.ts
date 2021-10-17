import { ComponentFixture, TestBed } from '@angular/core/testing';

import { produtoFornecedorlerComponent } from './produtoFornecedor-ler.component';

describe('produtoFornecedorLerComponent', () => {
  let component: produtoFornecedorlerComponent;
  let fixture: ComponentFixture<produtoFornecedorlerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [produtoFornecedorlerComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(produtoFornecedorlerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

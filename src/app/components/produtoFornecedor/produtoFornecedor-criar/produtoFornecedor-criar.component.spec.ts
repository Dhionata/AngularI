import { ComponentFixture, TestBed } from '@angular/core/testing';

import { produtoFornecedorCreateComponent } from './produtoFornecedor-criar.component';

describe('produtoFornecedorCreateComponent', () => {
  let component: produtoFornecedorCreateComponent;
  let fixture: ComponentFixture<produtoFornecedorCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [produtoFornecedorCreateComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(produtoFornecedorCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

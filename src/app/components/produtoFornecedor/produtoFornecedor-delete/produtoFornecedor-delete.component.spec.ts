import { ComponentFixture, TestBed } from '@angular/core/testing';

import { produtoFornecedorDeleteComponent } from './produtoFornecedor-delete.component';

describe('produtoFornecedorDeleteComponent', () => {
  let component: produtoFornecedorDeleteComponent;
  let fixture: ComponentFixture<produtoFornecedorDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [produtoFornecedorDeleteComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(produtoFornecedorDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

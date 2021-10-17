import { ComponentFixture, TestBed } from '@angular/core/testing';

import { produtoFornecedorUpdateComponent } from './produtoFornecedor-update.component';

describe('produtoFornecedorUpdateComponent', () => {
  let component: produtoFornecedorUpdateComponent;
  let fixture: ComponentFixture<produtoFornecedorUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [produtoFornecedorUpdateComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(produtoFornecedorUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

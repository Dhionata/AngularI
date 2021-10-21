import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnderecoFornecedorDeleteComponent } from './enderecoFornecedor-delete.component';

describe('EnderecoFornecedorDeleteComponent', () => {
  let component: EnderecoFornecedorDeleteComponent;
  let fixture: ComponentFixture<EnderecoFornecedorDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EnderecoFornecedorDeleteComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnderecoFornecedorDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

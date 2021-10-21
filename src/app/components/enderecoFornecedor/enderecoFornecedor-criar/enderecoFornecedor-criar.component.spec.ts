import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnderecoFornecedorCriarComponent } from './enderecoFornecedor-criar.component';

describe('EnderecoFornecedorCriarComponent', () => {
  let component: EnderecoFornecedorCriarComponent;
  let fixture: ComponentFixture<EnderecoFornecedorCriarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EnderecoFornecedorCriarComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnderecoFornecedorCriarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

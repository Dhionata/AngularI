import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnderecoFornecedorlerComponent } from './enderecoFornecedor-ler.component';

describe('EnderecoFornecedorlerComponent', () => {
  let component: EnderecoFornecedorlerComponent;
  let fixture: ComponentFixture<EnderecoFornecedorlerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EnderecoFornecedorlerComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnderecoFornecedorlerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

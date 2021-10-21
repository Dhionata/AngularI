import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnderecoFornecedorComponent } from './enderecoFornecedor.component';

describe('EnderecoFornecedorComponent', () => {
  let component: EnderecoFornecedorComponent;
  let fixture: ComponentFixture<EnderecoFornecedorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EnderecoFornecedorComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnderecoFornecedorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnderecoFornecedorUpdateComponent } from './enderecoFornecedor-update.component';

describe('EnderecoFornecedorUpdateComponent', () => {
  let component: EnderecoFornecedorUpdateComponent;
  let fixture: ComponentFixture<EnderecoFornecedorUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EnderecoFornecedorUpdateComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnderecoFornecedorUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

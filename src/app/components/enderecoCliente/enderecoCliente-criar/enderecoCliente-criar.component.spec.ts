import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnderecoClienteCreateComponent } from './enderecoCliente-criar.component';

describe('EnderecoClienteCreateComponent', () => {
  let component: EnderecoClienteCreateComponent;
  let fixture: ComponentFixture<EnderecoClienteCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EnderecoClienteCreateComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnderecoClienteCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

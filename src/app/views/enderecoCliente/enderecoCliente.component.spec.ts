import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnderecoClienteComponent } from './enderecoCliente.component';

describe('EnderecoClienteComponent', () => {
  let component: EnderecoClienteComponent;
  let fixture: ComponentFixture<EnderecoClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EnderecoClienteComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnderecoClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

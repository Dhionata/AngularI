import { ComponentFixture, TestBed } from '@angular/core/testing';

import { enderecoClienteDeleteComponent } from './enderecoCliente-delete.component';

describe('enderecoClienteDeleteComponent', () => {
  let component: enderecoClienteDeleteComponent;
  let fixture: ComponentFixture<enderecoClienteDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [enderecoClienteDeleteComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(enderecoClienteDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnderecoClienteUpdateComponent } from './enderecoCliente-update.component';

describe('EnderecoClienteUpdateComponent', () => {
  let component: EnderecoClienteUpdateComponent;
  let fixture: ComponentFixture<EnderecoClienteUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EnderecoClienteUpdateComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnderecoClienteUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

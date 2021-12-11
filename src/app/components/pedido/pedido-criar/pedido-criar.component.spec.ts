import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PedidoCreateComponent } from './pedido-criar.component';

describe('pedidoCreateComponent', () => {
  let component: PedidoCreateComponent;
  let fixture: ComponentFixture<PedidoCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PedidoCreateComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PedidoCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemPedidoCreateComponent } from './itemPedido-criar.component';

describe('ItemPedidoCreateComponent', () => {
  let component: ItemPedidoCreateComponent;
  let fixture: ComponentFixture<ItemPedidoCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ItemPedidoCreateComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemPedidoCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

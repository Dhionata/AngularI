import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemPedidolerComponent } from './itemPedido-delete.component';

describe('ItemPedidolerComponent', () => {
  let component: ItemPedidolerComponent;
  let fixture: ComponentFixture<ItemPedidolerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ItemPedidolerComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemPedidolerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

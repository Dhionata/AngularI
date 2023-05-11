import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemPedidoDeleteComponent } from './itemPedido-delete.component';

describe('ItemPedidoDeleteComponent', () => {
  let component: ItemPedidoDeleteComponent;
  let fixture: ComponentFixture<ItemPedidoDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ItemPedidoDeleteComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemPedidoDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

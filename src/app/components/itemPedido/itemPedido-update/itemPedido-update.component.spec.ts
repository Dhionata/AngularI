import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemPedidoUpdateComponent } from './itemPedido-update.component';

describe('ItemPedidoUpdateComponent', () => {
  let component: ItemPedidoUpdateComponent;
  let fixture: ComponentFixture<ItemPedidoUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ItemPedidoUpdateComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemPedidoUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

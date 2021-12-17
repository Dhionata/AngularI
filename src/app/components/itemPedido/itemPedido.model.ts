import { Pedido } from "../pedido/pedido.model";
import { Produto } from "../produto/produto.model";

export class ItemPedido {
  id?: number;
  pedido!: Pedido;
  produto!: Produto;
  quantidade!: number;
}

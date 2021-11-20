import { FormaPagamento } from './../formaPagamento/formaPagamento.model';
import { ItemPedido } from '../itemPedido/itemPedido.model';
import { Cliente } from './../cliente/cliente.model';

export interface Pedido {
  id?: number,
  itensPedido: Array<ItemPedido>,
  cliente: Cliente,
  formaPagamento: FormaPagamento,
  desconto: number,
  pago: boolean,
  entregue: boolean,
  data: Date
}

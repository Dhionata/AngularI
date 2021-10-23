import { itemPedido } from '../itemPedido/itemPedido.model';
import { cliente } from './../cliente/cliente.model';

export interface pedido {
  id?: number,
  itensPedido: Array<itemPedido>,
  cliente: cliente,
  formaPagamento: FormaPagamento,
  desconto: number,
  pago: boolean,
  entregue: boolean,
  data: Date
}

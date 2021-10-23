import { cliente } from './../cliente/cliente.model';

export interface pedido {
  id?: number,
  itensPedido: Array<ItemPedido>,
  cliente: cliente,
  formaPagamento: FormaPagamento,
  desconto: number,
  pago: boolean,
  entregue: boolean,
  data: Date
}

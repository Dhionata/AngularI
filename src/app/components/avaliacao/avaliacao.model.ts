import { Pedido } from "../pedido/pedido.model";

export class Avaliacao {
  id?: number
  nota?: number
  comentario?: String
  data?: Date
  pedido?: Pedido
}

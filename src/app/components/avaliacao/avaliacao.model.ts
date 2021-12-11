import { Pedido } from "../pedido/pedido.model";

export interface Avaliacao {
  id?: number
  nota: number
  comentario: String
  data: Date
  pedido: Pedido
}
